import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
        <header className="login-header">
            <img className="login-logo"
            width="60"
            src="./assets/logo_4x.png" 
            alt="Логотип. Собака лежит на абривиатуре DFS"
            srcSet="
              ./assets/logo_1x.png 60w,
              ./assets/logo_2x.png 120w,
              ./assets/logo_4x.png 240w
            "
            sizes="
              (max-width: 240px) 100px,
              (min-width: 320px) 440px,
              (min-width: 520px) 880px
            "/>
            <h1 className="h1">Войдите в свой аккаунт</h1>
        </header>
        <form className="login-htmlForm">
            <div className="input-group ign">
                <input name="number-phone" id="number-phone" className="input-login" type="tel" placeholder=" " maxLength={13}/>
                <div className="cut"></div>
                <label htmlFor="number-phone" className="placeholder">Номер телефона</label>
            </div>
            <div className="input-group igp">
                <input name="password" id="password" className="input-login" type="password" placeholder=" " maxLength={24}/>
                <div className="cut"></div>
                <label htmlFor="password" className="placeholder">Пароль</label>
            </div>
            <div className="login-button">
                <button className="login-submit" type="submit">Войти</button>
            </div>
        </form>
        <div className="google-auth-button">
            <button className="google-auth">
                <img src="./assets/icon-google.png" alt="Google" />
                Продолжить с Google
            </button>
        </div>
        <div className="link-to-registration">
            <a href="register.html">Создать аккаунт</a>
        </div>
    </div>
  );
};

export default Login;

