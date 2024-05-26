import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo_4x, logo_2x, logo_1x, icon_google } from '../assets/img';
import { ErrorBoundary } from '../components/error-boundary';
import { URLs } from "../__data__/urls";
import { Link } from '../components/link/link';
import { Button } from '../components/button';
import { InputField } from '../components/input-field';
import { TitleH1 } from '../components/title-h1';
import { Wrapper, Header, Title, Form, SubmitButton, GoogleAuthButton, LinkContainer } from './login-register.styled';
import { useGoogleLogin } from '@react-oauth/google';
import { Logo } from '../components/logo';

const InputFields = ({ formValues, setFormValues, formErrors, setFormErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (value.trim() === '') {
      setFormErrors(prevState => ({ ...prevState, [name]: '' }));
    } else {
      const fieldConfig = inputFieldsList.find(field => field.name === name);
      if (fieldConfig && fieldConfig.validation) {
        const error = fieldConfig.validation(value);
        setFormErrors(prevState => ({ ...prevState, [name]: error }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldConfig = inputFieldsList.find(field => field.name === name);
    if (fieldConfig && fieldConfig.validation) {
      const error = value.trim() === '' ? '' : fieldConfig.validation(value);
      setFormErrors(prevState => ({ ...prevState, [name]: error }));
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    // Сбрасываем только ошибку "Поле не может быть пустым" при фокусировке на поле
    if (formErrors[name] === "Поле не может быть пустым") {
      setFormErrors(prevState => ({ ...prevState, [name]: '' }));
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
    >
      {element.title}
    </InputField>
  ));
};

const validatePhoneNumber = (value) => {
  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(value)) {
    return "Введите корректный номер телефона.";
  }
  return "";
};

const inputFieldsList = [
  { title: "Номер телефона", name: "number-phone", id: "number-phone", type: "tel", maxLength: 11, validation: validatePhoneNumber },
  { title: "Пароль", name: "password", id: "password", type: "password", maxLength: 24 }
];

const Login = () => {
  const [formValues, setFormValues] = useState({
    'number-phone': '',
    'password': ''
  });
  const [formErrors, setFormErrors] = useState({
    'number-phone': '',
    'password': ''
  });
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    for (const field of inputFieldsList) {
      if (!formValues[field.name]) {
        errors[field.name] = "Поле не может быть пустым";
      }
    }
    const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (!phoneRegex.test(formValues['number-phone'])) {
      errors['number-phone'] = "Введите корректный номер телефона.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const response = await fetch(`${URLs.api.main}/users`);
    const users = await response.json();

    const user = users.find(u => u.phone_number.toString() === formValues['number-phone'] && u.password.toString() === formValues['password']);
    if (user) {
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userRole', user.role);
      sessionStorage.setItem('id', user.id)
      navigate(URLs.ui.search);
    } else {
      alert('Неверный номер телефона или пароль');
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google Login Success:', response);
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userRole', 'user'); // Хочется нормальную ролевку в перспективе...
      sessionStorage.setItem('id', (Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(5) + 1)) + Math.ceil(5)).toString());
      navigate(URLs.ui.search);
    },
    onError: (error) => {
      console.log('Google Login Failed:', error);
    }
  });

return (
    <Wrapper>
      <ErrorBoundary>
        <Header>
          <Logo width="60"
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
            "></Logo>
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