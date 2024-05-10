import React from 'react'

import './css/style_login.css'

import { logo_4x } from '../assets/img'
import { logo_2x } from '../assets/img'
import { logo_1x } from '../assets/img'
import { icon_google } from '../assets/img'

import { Link } from '../components/link/link'
import { Button } from '../components/button';
import { InputField } from '../components/input-field';

const Login = () => {
  return (
    <div className="login-container">
        <header className="login-header">
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
            <h1 className="h1">Войдите в свой аккаунт</h1>
        </header>
        <form className="login-htmlForm">
            <InputField name="number-phone" id="number-phone" type="tel" max-length={12}>Номер телефона</InputField>
            <InputField name="password" id="password" type="password" max-length={24}>Пароль</InputField>
            <div className="login-button">
                <Button type="submit">Войти</Button>
            </div>
        </form>
        <div className="google-auth-button">
            <Button isGoogle type="button" icon={icon_google}>Продолжить с Google</Button>
        </div>
        <Link href="register.html">Создать аккаунт</Link>
    </div>
  );
};

export default Login;

