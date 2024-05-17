import React from 'react';

import './css/style_register.css';

import { logo_4x } from '../assets/img'
import { logo_2x } from '../assets/img'
import { logo_1x } from '../assets/img'
import { icon_google } from '../assets/img'

import { ErrorBoundary } from '../components/error-boundary';
import { URLs } from "../__data__/urls";
import { Link } from '../components/link/link'
import { CheckBox } from '../components/check-box';
import { Button } from '../components/button';
import { InputField } from '../components/input-field';
import { TitleH1 } from '../components/title-h1'
import { Wrapper, Header, Title, Form, SubmitButton, GoogleAuthButton, CheckboxesContainer, LinkContainer } from './login-register.styled'

const inputFieldsList = [
  {id:"first-name", title:"Имя", name:"first-name", type:"text", maxLength:35},
  {id:"second-name", title:"Фамилия", name:"second-name", type:"text", maxLength:35},
  {id:"number-phone", title:"Номер телефона", name:"number-phone", type:"tel", maxLength:12},
  {id:"password", title:"Пароль", name:"password", type:"password", maxLength:24},
  {id:"password-confirmation", title:"Подтвердите пароль", name:"password-confirmation", type:"password", maxLength:24}
]

const InputFields = () => 
    inputFieldsList.map((element) => (
      <InputField inColumn name={element.name} id={element.id} type={element.type} maxLength={element.maxLength}>{element.title}</InputField>
    ));


const Register = () => {
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
        <Form>
            <InputFields/>
            <CheckboxesContainer>
                <CheckBox name="host" id="host">Я хозяин</CheckBox>
                <CheckBox name="dogsitter" id="dogsitter">Я догситер</CheckBox>
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
