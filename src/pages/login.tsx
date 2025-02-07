import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo_4x, logo_2x, logo_1x, icon_google } from "../assets/img";
import { ErrorBoundary } from "../components/error-boundary";
import { URLs } from "../__data__/urls";
import { Link } from "../components/link/link";
import { Button } from "../components/button";
import { InputField } from "../components/input-field";
import { TitleH1 } from "../components/title-h1";
import {
  Wrapper,
  Header,
  Title,
  Form,
  SubmitButton,
  GoogleAuthButton,
  LinkContainer,
} from "./login-register.styled";
import { useGoogleLogin } from "@react-oauth/google";
import { Logo } from "../components/logo";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { userActions } from "../store/user.slice";
import { useAuthenticateMutation } from "../store/api/apiSlice";
import { getFeatures } from "@brojs/cli";
import { useForm } from "react-hook-form";

// Импортируем кусок кода/логики для второго фактора аутентификации
import { useVerifyTwoFactorAuthMutation } from "../store/api/apiSlice";

const { googleAuth } = getFeatures("dog-sitters-finder");

// Валидация номера телефона
const validatePhoneNumber = (value: string) => {
  const phoneRegex = /^8\d{10}$/;
  if (!phoneRegex.test(value)) {
    return "Введите корректный номер телефона";
  }
  return "";
};

const inputFieldsList = [
  {
    title: "Номер телефона",
    name: "number-phone",
    id: "number-phone",
    type: "tel",
    maxLength: 11,
    validation: validatePhoneNumber,
    mask: "89999999999",
  },
  {
    title: "Пароль",
    name: "password",
    id: "password",
    type: "password",
    maxLength: 24,
  },
];

const InputFields = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldConfig = inputFieldsList.find((field) => field.name === name);
    if (fieldConfig && fieldConfig.validation) {
      const error = value.trim() === "" ? "" : fieldConfig.validation(value);
      setFormErrors((prevState: any) => ({ ...prevState, [name]: error }));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (
      formErrors[name] === "Поле не может быть пустым" ||
      formErrors[name] === "Введите корректный номер телефона"
    ) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  return (
    <>
      {inputFieldsList.map((element) => (
        <InputField
          key={element.id}
          name={element.name}
          id={element.id}
          type={element.type}
          maxLength={element.maxLength}
          error={formErrors[element.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          mask={element.mask}
        >
          {element.title}
        </InputField>
      ))}
    </>
  );
};

const Login = () => {
  // Локальное состояние
  const [formValues, setFormValues] = useState({
    "number-phone": "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    "number-phone": "",
    password: "",
  });

  // STEP: 0 - ввод логина и пароля, 1 - ввод кода из Телеграма
  const [step, setStep] = useState<number>(0);

  // Здесь хранится код из Telegram
  const [twoFaCode, setTwoFaCode] = useState("");
  const [twoFaError, setTwoFaError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [authenticate, { isLoading }] = useAuthenticateMutation();
  const [verifyTwoFactorAuth, { isLoading: isVerifyLoading }] =
    useVerifyTwoFactorAuthMutation();

  const { handleSubmit: handleSubmitLoginRHF } = useForm();
  const { handleSubmit: handleSubmitTwoFaRHF } = useForm();

  // Валидация формы
  const validateForm = () => {
    const errors: Record<string, string> = {};
    for (const field of inputFieldsList) {
      if (!formValues[field.name]) {
        errors[field.name] = "Поле не может быть пустым";
      } else if (field.name === "number-phone") {
        const error = validatePhoneNumber(formValues[field.name]);
        if (error) {
          errors[field.name] = error;
        }
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Обработчик отправки логина (Step 1)
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await authenticate({
        phoneNumber: formValues["number-phone"],
        password: formValues["password"],
      }).unwrap();

      // --- Поведение для stepper ---
      setStep(1);
    } catch (error: any) {
      setFormErrors({
        ...formErrors,
        "number-phone": error.data?.message || "Произошла ошибка",
      });
    }
  };

  // Обработчик ввода кода (Step 2)
  const handleBlurCode = () => {
    if (!twoFaCode.trim()) {
      setTwoFaError("Поле не может быть пустым");
    } else if (twoFaCode.length < 4) {
      setTwoFaError("Введите корректный код");
    } else {
      setTwoFaError("");
    }
  };

  const handleFocusCode = () => {
    setTwoFaError("");
  };

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Оставляем только цифры
    const filteredValue = e.target.value.replace(/\D/g, "");
    setTwoFaCode(filteredValue);
  };

  // Обработчик отправки кода (Step 2)
  const handleSubmitTwoFa = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!twoFaCode.trim()) {
      setTwoFaError("Поле не может быть пустым");
      return;
    } else if (twoFaCode.length < 4) {
      setTwoFaError("Введите корректный код");
      return;
    }

    try {
      // Передаём на бек номер телефона из первого шага вместе с кодом
      const data = await verifyTwoFactorAuth({
        phoneNumber: formValues["number-phone"],
        code: twoFaCode,
      }).unwrap();
      // Обновляем Redux: пользователь прошёл 2FA
      dispatch(
        userActions.addJwt(
          data.access_token
        )
      );

      navigate(URLs.ui.search); // Перенаправление на защищенную страницу
    } catch (err) {
      setTwoFaError("Неверный код. Попробуйте снова.");
    }
  };

  // Google Login
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Google Login Success:", response);
      const userId =
        Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 4)) + 5;
      dispatch(
        userActions.addJwt(
          "jwt"
        )
      );
      navigate(URLs.ui.search);
    },
    onError: (error) => {
      console.log("Google Login Failed:", error);
    },
  });

  // Рендерим либо Step 0 (логин), либо Step 1 (код)
  return (
    <Wrapper>
      <ErrorBoundary>
        <Header>
          <Logo
            width="60"
            src={logo_4x}
            alt="Логотип. Собака лежит на абривиатуре DFS"
            srcSet={`
              ${logo_1x} 60w,
              ${logo_2x} 120w,
              ${logo_4x} 240w
            `}
            sizes="
              (max-width: 240px) 100px,
              (min-width: 320px) 440px,
              (min-width: 520px) 880px
            "
          />
          <Title>
            <TitleH1>
              {step === 0
                ? "Войдите в свой аккаунт"
                : "Введите код подтверждения"}
            </TitleH1>
          </Title>
        </Header>
      </ErrorBoundary>

      <ErrorBoundary>
        {step === 0 && (
          // Передаём handleSubmitLoginRHF вместо обычного onSubmit,
          // при этом в колбэке передаём наше handleSubmitLogin (куда "прокидываем" e)
          <Form
            onSubmit={(e) =>
              handleSubmitLoginRHF((_, event) => handleSubmitLogin(event))(e)
            }
          >
            {/* Шаг 1: форма логина */}
            <InputFields
              formValues={formValues}
              setFormValues={setFormValues}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
            />
            <SubmitButton>
              <Button type="submit">Войти</Button>
            </SubmitButton>
          </Form>
        )}

        {step === 1 && (
          <Form
            onSubmit={(e) =>
              handleSubmitTwoFaRHF((_, event) => handleSubmitTwoFa(event))(e)
            }
          >
            {/* Шаг 2: ввод кода из Telegram */}
            <InputField
              name="2fa-code"
              id="2fa-code"
              type="text"
              maxLength={4}
              value={twoFaCode}
              onChange={handleChangeCode}
              onBlur={handleBlurCode}
              onFocus={handleFocusCode}
              error={twoFaError}
            >
              Введите код из Telegram
            </InputField>
            <SubmitButton>
              <Button type="submit">Подтвердить</Button>
            </SubmitButton>
          </Form>
        )}
      </ErrorBoundary>

      {step === 0 && (
        <ErrorBoundary>
          {googleAuth && (
            <GoogleAuthButton>
              <Button
                isGoogle
                type="button"
                icon={icon_google}
                onClick={googleLogin}
              >
                Продолжить с Google
              </Button>
            </GoogleAuthButton>
          )}
        </ErrorBoundary>
      )}

      <ErrorBoundary>
        {step === 0 && (
          <LinkContainer>
            <Link href={URLs.ui.register}>Создать аккаунт</Link>
          </LinkContainer>
        )}
        {step === 1 && (
          <LinkContainer>
            <Link
              logout
              href={URLs.baseUrl}
              onClick={(e) => {
                e.preventDefault();
                setStep(0);
              }}
            >
              Вернуться
            </Link>
          </LinkContainer>
        )}
      </ErrorBoundary>
    </Wrapper>
  );
};

export default Login;
