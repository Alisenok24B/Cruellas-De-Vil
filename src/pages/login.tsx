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

const InputFields = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldConfig = inputFieldsList.find((field) => field.name === name);
    if (fieldConfig && fieldConfig.validation) {
      const error = value.trim() === "" ? "" : fieldConfig.validation(value);
      setFormErrors((prevState) => ({ ...prevState, [name]: error }));
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    if (
      formErrors[name] === "Поле не может быть пустым" ||
      formErrors[name] === "Введите корректный номер телефона"
    ) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  return inputFieldsList.map((element) => (
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
  ));
};

const validatePhoneNumber = (value) => {
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

const Login = () => {
  const [formValues, setFormValues] = useState({
    "number-phone": "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    "number-phone": "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const validateForm = () => {
    const errors = {};
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    const authResponse = await fetch(`${URLs.api.main}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: formValues["number-phone"],
        password: formValues["password"],
      }),
    });

    if (authResponse.ok) {
      const user = await authResponse.json();
      // localStorage.setItem('isAuthenticated', 'true');
      // localStorage.setItem('userRole', user.data.role);
      // localStorage.setItem('id', user.data.id);
      dispatch(
        userActions.addJwt({
          isAuthenticated: "true",
          userRole: user.data.role,
          id: user.data.id,
        })
      );
      navigate(URLs.ui.search);
    } else {
      const error = await authResponse.json();
      setFormErrors({ ...formErrors, "number-phone": error.error });
    }

    /*const response = await fetch(`${URLs.api.main}/users`);
    const users = await response.json();

    const user = users.find(u => u.phone_number.toString() === formValues['number-phone'] && u.password.toString() === formValues['password']);
    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('id', user.id);
      navigate(URLs.ui.search);
    } else {
      alert('Неверный номер телефона или пароль');
    }*/
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Google Login Success:", response);
      // localStorage.setItem("isAuthenticated", "true");
      // localStorage.setItem("userRole", "user"); // Хочется нормальную ролевку в перспективе...
      const userId =
        Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 4)) + 5;
      // localStorage.setItem("id", userId.toString());
      dispatch(
        userActions.addJwt({
          isAuthenticated: "true",
          userRole: "user",
          id: userId,
        })
      );
      navigate(URLs.ui.search);
    },
    onError: (error) => {
      console.log("Google Login Failed:", error);
    },
  });

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
          ></Logo>
          <Title>
            <TitleH1>Войдите в свой аккаунт</TitleH1>
          </Title>
        </Header>
      </ErrorBoundary>
      <ErrorBoundary>
        <Form onSubmit={handleSubmit}>
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
      </ErrorBoundary>
      <ErrorBoundary>
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
      </ErrorBoundary>
      <ErrorBoundary>
        <LinkContainer>
          <Link href={URLs.ui.register}>Создать аккаунт</Link>
        </LinkContainer>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default Login;
