import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo_4x, logo_2x, logo_1x, icon_google } from '../assets/img';
import { ErrorBoundary } from '../components/error-boundary';
import { URLs } from "../__data__/urls";
import { Link } from '../components/link/link';
import { CheckBox } from '../components/check-box';
import { Button } from '../components/button';
import { InputField } from '../components/input-field';
import { TitleH1 } from '../components/title-h1';
import { Logo } from '../components/logo';
import { Wrapper, Header, Title, Form, SubmitButton, GoogleAuthButton, CheckboxesContainer, LinkContainer, RoleErrorMessage } from './login-register.styled';
import usersData from '../../stubs/json/users.json';
import { useGoogleLogin } from '@react-oauth/google';

const InputFields = ({ formValues, setFormValues, formErrors, setFormErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name !== 'number-phone') {
      const fieldConfig = inputFieldsList.find(field => field.name === name);
      if (fieldConfig && fieldConfig.validation) {
        const error = value.trim() === '' ? '' : fieldConfig.validation(value, formValues);
        setFormErrors({ ...formErrors, [name]: error });
      }
    }

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
    if (formErrors[name] === "Поле не может быть пустым" || formErrors[name] === "Введите корректный номер телефона") {
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
      value={formValues[element.name]}
      mask={element.mask}
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
  const phoneRegex = /^8\d{10}$/;
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
  { id: "number-phone", title: "Номер телефона", name: "number-phone", type: "tel", maxLength: 11, validation: validatePhoneNumber, mask: "89999999999" },
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
  const [roleError, setRoleError] = useState('');
  const navigate = useNavigate();


  const handleRoleChange = (e) => {
    const { name, checked } = e.target;
    setRoles({ ...roles, [name]: checked });
    if (roleError) {
      setRoleError('');
    }
  };

  const validateForm = () => {
    const errors = {};
    for (const field of inputFieldsList) {
      if (!formValues[field.name]) {
        errors[field.name] = "Поле не может быть пустым";
      } else if (field.validation) {
        const error = field.validation(formValues[field.name], formValues);
        if (error) {
          errors[field.name] = error;
        }
      } else if (field.name == 'number-phone') {
        const error = validatePhoneNumber(formValues[field.name])
        if (error) {
          errors[field.name] = error;
        }
      }
    }

    if (!roles.host && !roles.dogsitter) {
      setRoleError('Выберите хотя бы одну роль');
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0 && (roles.host || roles.dogsitter);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const role = roles.dogsitter ? "dogsitter" : "owner";
    console.log('role = ', role);
    const registerResponse = await fetch(`${URLs.api.main}/register`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firatName: formValues['first-name'],
          secondName: formValues['second-name'],
          phoneNumber: formValues['number-phone'],
          password: formValues['password'],
          role: role
        })
      }
    )

    if (registerResponse.ok) {
      const user = await registerResponse.json();
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', user.data.role);
      localStorage.setItem('id', user.data.id);
      navigate(URLs.ui.search);
    }
    else {
      const error = await registerResponse.json();
      setRoleError(error.error);
    }
    /*
    const newUser = {
      id: Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 4)) + 5,
      phone_number: formValues['number-phone'],
      password: formValues['password'],
      first_name: formValues['first-name'],
      second_name: formValues['second-name'],
      role: role.length > 1 ? role : role[0]
    };

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', role.includes("dogsitter") ? "dogsitter" : role[0]);
    localStorage.setItem('id', newUser.id.toString())
    navigate(URLs.ui.search);*/
  };


  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      console.log('Google Login Success:', response);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'user'); // Хочется нормальную ролевку в перспективе...
      const userId = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 4)) + 5;
      localStorage.setItem('id', (userId).toString());
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
          <CheckboxesContainer roleError={roleError}>
            <CheckBox name="host" id="host" onChange={handleRoleChange} checked={roles.host}>Я хозяин</CheckBox>
            <CheckBox name="dogsitter" id="dogsitter" onChange={handleRoleChange} checked={roles.dogsitter}>Я догситер</CheckBox>
            {roleError && <RoleErrorMessage>{roleError}</RoleErrorMessage>}
          </CheckboxesContainer>
          <SubmitButton>
            <Button type="submit">Зарегистрироваться</Button>
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
          <Link href={URLs.baseUrl}>Уже есть аккаунт? Войти</Link>
        </LinkContainer>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default Register;
