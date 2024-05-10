import React from 'react';

import './css/style_register.css';

import { logo_4x } from '../assets/img'
import { logo_2x } from '../assets/img'
import { logo_1x } from '../assets/img'
import { icon_google } from '../assets/img'

import { Link } from '../components/link/link'
import { CheckBox } from '../components/check-box';
import { Button } from '../components/button';
import { InputField } from '../components/input-field';
import { TitleH1 } from '../components/title-h1'

const Register = () => {
  return (
    <div className="register-container">
        <header className="register-header">
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
            <div className="title">
                <TitleH1>Войдите в свой аккаунт</TitleH1>
            </div>
        </header>
        <form className="register-form">
            <InputField name="first-name" id="first-name" type="text" max-length={35} inColumn>Имя</InputField>
            <InputField name="second-name" id="second-name" type="text" max-length={35} inColumn>Фамилия</InputField>
            <InputField name="number-phone" id="number-phone" type="tel" max-length={12} inColumn>Номер телефона</InputField>
            <InputField name="password" id="password" type="password" max-length={24} inColumn>Пароль</InputField>
            <InputField name="password-confirmation" id="password-confirmation" type="password" max-length={24} inColumn>Подтвердите пароль</InputField>
            <div className="checkboxes-container">
                <CheckBox name="host" id="host">Я хозяин</CheckBox>
                <CheckBox name="dogsitter" id="dogsitter">Я догситер</CheckBox>
            </div>
            <div className="register-button">
                <Button type="submit">Зарегистрироваться</Button>
            </div>
        </form>
        <div className="google-auth-button">
            <Button isGoogle type="button" icon={icon_google}>Продолжить с Google</Button>
        </div>
        <Link href="login.html">Уже есть аккаунт? Войти</Link>
    </div>
  );
};

export default Register;
