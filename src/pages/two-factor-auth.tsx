import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user.slice";
import { Button } from "../components/button";
import { InputField } from "../components/input-field";
import {
  Wrapper,
  Form,
  SubmitButton,
  LinkContainer,
  Title,
  Header,
} from "./login-register.styled";
import { URLs } from "../__data__/urls";
import { useVerifyTwoFactorAuthMutation } from "../store/api/apiSlice";
import { ErrorBoundary } from "../components/error-boundary";
import { Link } from "../components/link/link";
import { TitleH1 } from "../components/title-h1";
import { Logo } from "../components/logo";
import { logo_1x, logo_2x, logo_4x } from "../assets/img";

const TwoFactorAuth = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [verifyTwoFactorAuth, { isLoading }] = useVerifyTwoFactorAuthMutation();

  const handleBlur = () => {
    if (!code.trim()) {
      setError("Поле не может быть пустым");
    } else if (code.length < 4) {
      setError("Введите корректный код");
    } else {
      setError(""); // Сбрасываем ошибку, если всё корректно
    }
  };

  const handleFocus = () => {
    // Сбрасываем ошибку при фокусе
    setError("");
  };

  const handleChange = (e) => {
    const value = e.target.value;

    // Фильтруем только цифры
    const filteredValue = value.replace(/\D/g, "");
    setCode(filteredValue); // Обновляем состояние только с цифрами
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code.trim()) {
      setError("Поле не может быть пустым");
      return;
    } else if (code.length < 4) {
      setError("Введите корректный код");
      return;
    }

    try {
      const response = await verifyTwoFactorAuth({ code }).unwrap();

      // Устанавливаем пользователя как полностью аутентифицированного
      dispatch(
        userActions.updateJwt({
          isAuthenticated: true,
        })
      );
      navigate(URLs.ui.search); // Перенаправление на защищенную страницу
    } catch (err) {
      setError("Неверный код. Попробуйте снова.");
    }
  };

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
            <TitleH1>Введите код подтверждения</TitleH1>
          </Title>
        </Header>
      </ErrorBoundary>
      <ErrorBoundary>
        <Form onSubmit={handleSubmit}>
          <InputField
            name="2fa-code"
            id="2fa-code"
            type="text"
            maxLength={4}
            value={code}
            onChange={handleChange}
            onBlur={handleBlur} // Обработка ухода фокуса
            onFocus={handleFocus} // Обработка фокуса
            error={error} // Передаем сообщение об ошибке
          >
            Введите код из Telegram
          </InputField>
          <SubmitButton>
            <Button type="submit">Подтвердить</Button>
          </SubmitButton>
        </Form>
      </ErrorBoundary>
      <ErrorBoundary>
        <LinkContainer>
          <Link logout href={URLs.baseUrl}>
            Вернуться
          </Link>
        </LinkContainer>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default TwoFactorAuth;
