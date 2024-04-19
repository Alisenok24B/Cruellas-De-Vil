import React from "react";

import { NameOfComponent } from '../components/name_of_component/'  // !!!

import './styles_for_search.css';

import { logo } from '../assets/img'
import { map } from '../assets/img'
import { profile } from '../assets/img'
import { user_photo } from '../assets/img'

const Search = () => {
  return (
    <>
      <header id="header" className="header">
        {/* <NameOfComponent/>  !!! */}

        <div className="container">
            <nav className="nav">
                <img src={logo} alt="Человек с собакой"/>
                <ul className="menu">
                    <li>
                       <a href="#">
                        <img src={map} alt="Картинка в виде карты"/>
                       </a> 
                    </li>
                    <li>
                        <a href="#" id="profile" className="show-profile">
                         <img src={profile} alt="Картинка в виде человека"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Выход
                        </a> 
                     </li>
                </ul>
            </nav>
        </div>
    </header>
    <main id="main" className="main">
        <div className="container">
            <h1 className="find">
                Найти догситтера
            </h1>
            <div className="search">
                <div className="boxes">
                    <section className="place">
                        <h1>
                            Где искать?
                        </h1>
                        <div className="inp">
                            <input name="where-find" className="input-find" placeholder=" "/>
                            <div className="cut"></div>
                            <label htmlFor="where-find" className="placeholder">Страна, регион, город</label>
                        </div>
                    </section>
                    <section className="sort">
                        <h1>
                            Сортировка
                        </h1>
                        <div className="inp">
                            <select className="input-find">
                                <option value="" disabled selected>Сортировать по:</option>
                                <option value="">Возрастанию цены</option>
                                <option value="">Убыванию цены</option>
                            </select> 
                        </div>                         
                    </section>
                </div>
                <a href="#">
                    <h1 className="reset">
                        Сбросить настройки
                    </h1>
                </a>
            </div>
            <p className="finded">
                Найдено: 2 догситтера
            </p>
            <div className="preview-map">
                <ul className="previews">
                    <li>
                        <div className="photo">
                            <img src={user_photo} alt="Фото пользователя"/>
                        </div>
                        <div className="desc">
                            <p className="fullname">
                                1. Имя Фамилия
                            </p>
                            <p className="cost">
                                Стоимость: <span className="cost-rh">1500 руб/час</span>
                            </p>
                            <p className="fulldesc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="photo">
                            <img src={user_photo} alt="Фото пользователя"/>
                        </div>
                        <div className="desc">
                            <p className="fullname">
                                2. Имя Фамилия
                            </p>
                            <p className="cost">
                                Стоимость: <span className="cost-rh">1500 руб/час</span>
                            </p>
                            <p className="fulldesc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="map">
                    <h1 className="temprorary">
                        Интеграция с картой
                    </h1>
                </div>
            </div>
        </div>
    </main>
    <footer id="footer" className="footer">
        <div className="container">
            <div className="logo">
                <img src={logo} alt="Человек с собакой"/>
                <p>DogsitterFinder — любовь и забота о вашей собаке</p>
            </div>
            <div className="contacts">
                <p>Контактная информация:</p>
                <p>+7 (800) 555-35-35</p>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Search;