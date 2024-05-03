import React from 'react';

import './css/style_register.css';

import { logo_4x } from '../assets/img'
import { logo_2x } from '../assets/img'
import { logo_1x } from '../assets/img'
import { icon_google } from '../assets/img'

import { Link } from '../components/link/link'

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
            <h1 className="h1">Создайте аккаунт</h1>
        </header>
        
        <form className="register-form">
            <div className="input-group igfn">
                <input name="first-name" id="first-name" className="input-register" type="text" placeholder=" " maxLength={35}/>
                <div className="cut"></div>
                <label htmlFor="first-name" className="placeholder">Имя</label>
            </div>
            <div className="input-group igsn">
                <input name="second-name" id="second-name" className="input-register" type="text" placeholder=" " maxLength={35}/>
                <div className="cut"></div>
                <label htmlFor="second-name" className="placeholder">Фамилия</label>
            </div>
            <div className="input-group ign">
                <input name="number-phone" id="number-phone" className="input-register" type="tel" placeholder=" " maxLength={12}/>
                <div className="cut"></div>
                <label htmlFor="number-phone" className="placeholder">Номер телефона</label>
            </div>
            <div className="input-group igp">
                <input name="password" id="password" className="input-register" type="password" placeholder=" " maxLength={24}/>
                <div className="cut"></div>
                <label htmlFor="password" className="placeholder">Пароль</label>
            </div>
            <div className="input-group igpс">
                <input name="password-confirmation" id="password-confirmation" className="input-register" type="password" placeholder=" " maxLength={24}/>
                <div className="cut"></div>
                <label htmlFor="password-confirmation" className="placeholder">Подтвердите пароль</label>
            </div>
            <div className="checkboxes-container">
                <div className="checkbox">
                    <input name="host" type="checkbox" id="host" hidden />
                    <label htmlFor="host" className="checkbox-label"></label>
                    Я хозяин
                </div>
                <div className="checkbox">
                    <input name="dogsitter" type="checkbox" id="dogsitter" hidden />
                    <label htmlFor="dogsitter" className="checkbox-label"></label>
                    Я догситер
                </div>
            </div>
            <div className="register-button">
                <button className="register-submit" type="submit">Зарегистрироваться</button>
            </div>
        </form>
        <div className="google-auth-button">
            <button className="google-auth">
                <img src={icon_google} alt="Google" />
                Продолжить с Google
            </button>
        </div>
        <Link href="login.html">Уже есть аккаунт? Войти</Link>
    </div>
  );
};

export default Register;
