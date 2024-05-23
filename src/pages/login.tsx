import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logo_4x, logo_2x, logo_1x, icon_google } from '../assets/img';
import { ErrorBoundary } from '../components/error-boundary';
import { URLs } from "../__data__/urls";
import { Link } from '../components/link/link';
import { Button } from '../components/button';
import { InputField } from '../components/input-field';
import { TitleH1 } from '../components/title-h1';
import { Wrapper, Header, Title, Form, SubmitButton, GoogleAuthButton, LinkContainer } from './login-register.styled';
 
const InputFields = ({ formValues, setFormValues, formErrors, setFormErrors }) => {
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
 
    // Validate the field
    const fieldConfig = inputFieldsList.find(field => field.name === name);
    if (fieldConfig && fieldConfig.validation) {
      const error = fieldConfig.validation(value);
      setFormErrors({ ...formErrors, [name]: error });
    }
  };
 
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldConfig = inputFieldsList.find(field => field.name === name);
    if (fieldConfig && fieldConfig.validation) {
      const error = value ? fieldConfig.validation(value) : "";
      setFormErrors({ ...formErrors, [name]: error });
    }
  };
 
  const handleFocus = (e) => {
    const { name } = e.target;
    if (!formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
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
  { title: "Номер телефона", name: "number-phone", id: "number-phone", type: "tel", maxLength: 12, validation: validatePhoneNumber },
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
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const response = await fetch('/api/users');
    const users = await response.json();
 
    const user = users.find(u => u.phone_number.toString() === formValues['number-phone'] && u.password.toString() === formValues['password']);
 
    if (user) {
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userRole', user.role);
      navigate(URLs.ui.search);
    } else {
      alert('Неверный номер телефона или пароль');
    }
  };
 
  return (
    <Wrapper>
      <ErrorBoundary>
        <Header>
          <img className="login-logo"
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
            "/>
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
          <Button isGoogle type="button" icon={icon_google}>Продолжить с Google</Button>
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