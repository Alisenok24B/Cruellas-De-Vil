import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo_4x, logo_2x, logo_1x, icon_google } from '../assets/img';
import { ErrorBoundary } from '../components/error-boundary';
import { URLs } from "../__data__/urls";
import { Link } from '../components/link/link';
import { CheckBox } from '../components/check-box';
import { Button } from '../components/button';
import { InputField } from '../components/input-field';
import { TitleH1 } from '../components/title-h1';
import { Wrapper, Header, Title, Form, SubmitButton, GoogleAuthButton, CheckboxesContainer, LinkContainer } from './login-register.styled';
import usersData from '../__stubs__/users.json';

const InputFields = ({ formValues, setFormValues, formErrors, setFormErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const fieldConfig = inputFieldsList.find(field => field.name === name);
    if (fieldConfig && fieldConfig.validation) {
      const error = value.trim() === '' ? '' : fieldConfig.validation(value, formValues);
      setFormErrors({ ...formErrors, [name]: error });
    }

    // Дополнительно проверяем совпадение паролей
    if (name === 'password' && formValues['password-confirmation']) {
      const confirmPasswordError = validatePasswordConfirmation(formValues['password-confirmation'], { ...formValues, [name]: value });
      setFormErrors({ ...formErrors, 'password-confirmation': confirmPasswordError });
    }

    if (name === 'password-confirmation') {
      const confirmPasswordError = validatePasswordConfirmation(value, formValues);
      setFormErrors({ ...formErrors, [name]: confirmPasswordError });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldConfig = inputFieldsList.find(field => field.name === name);
    if (fieldConfig && fieldConfig.validation) {
      const error = value.trim() === '' ? '' : fieldConfig.validation(value, formValues);
      setFormErrors({ ...formErrors, [name]: error });
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    // Сбрасываем только ошибку "Поле не может быть пустым" при фокусировке на поле
    if (formErrors[name] === "Поле не может быть пустым") {
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

const validateName = (value) => {
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  if (!nameRegex.test(value)) {
    return "Поле должно содержать только буквы";
  }
  return "";
};

const validatePhoneNumber = (value) => {
  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(value)) {
    return "Введите корректный номер телефона";
  }
  return "";
};

const validatePasswordConfirmation = (value, formValues) => {
  if (value !== formValues['password']) {
    return "Пароли должны совпадать";
  }
  return "";
};

const inputFieldsList = [
  { id: "first-name", title: "Имя", name: "first-name", type: "text", maxLength: 35, validation: validateName },
  { id: "second-name", title: "Фамилия", name: "second-name", type: "text", maxLength: 35, validation: validateName },
  { id: "number-phone", title: "Номер телефона", name: "number-phone", type: "tel", maxLength: 11, validation: validatePhoneNumber },
  { id: "password", title: "Пароль", name: "password", type: "password", maxLength: 24 },
  { id: "password-confirmation", title: "Подтвердите пароль", name: "password-confirmation", type: "password", maxLength: 24, validation: validatePasswordConfirmation }
];

const Register = () => {
  const [formValues, setFormValues] = useState({
    'number-phone': '',
    'password': '',
    'first-name': '',
    'second-name': '',
    'password-confirmation': ''
  });
  const [formErrors, setFormErrors] = useState({
    'number-phone': '',
    'password': '',
    'first-name': '',
    'second-name': '',
    'password-confirmation': ''
  });
  const [roles, setRoles] = useState({
    host: false,
    dogsitter: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(usersData));
    }
  }, []);

  const handleRoleChange = (e) => {
    const { name, checked } = e.target;
    setRoles({ ...roles, [name]: checked });
  };

  const validateForm = () => {
    const errors = {};
    for (const field of inputFieldsList) {
      if (!formValues[field.name]) {
        errors[field.name] = "Поле не может быть пустым";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const role = [];
    if (roles.host) role.push("owner");
    if (roles.dogsitter) role.push("dogsitter");

    const newUser = {
      id: Date.now(),
      phone_number: formValues['number-phone'],
      password: formValues['password'],
      first_name: formValues['first-name'],
      second_name: formValues['second-name'],
      role: role.length > 1 ? role : role[0]
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    //console.log(newUser)
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('userRole', role.includes("dogsitter") ? "dogsitter" : role[0]);
    navigate(URLs.ui.search);
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
            <TitleH1>Создайте свой аккаунт</TitleH1>
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
          <CheckboxesContainer>
            <CheckBox name="host" id="host" onChange={handleRoleChange} checked={roles.host}>Я хозяин</CheckBox>
            <CheckBox name="dogsitter" id="dogsitter" onChange={handleRoleChange} checked={roles.dogsitter}>Я догситер</CheckBox>
          </CheckboxesContainer>
          <SubmitButton>
            <Button type="submit">Зарегистрироваться</Button>
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
          <Link href={URLs.baseUrl}>Уже есть аккаунт? Войти</Link>
        </LinkContainer>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default Register;
