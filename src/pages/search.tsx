import React from "react";

import './css/styles_for_search.css';

import { CustomSection } from "../components/custom-section";
import { PreviewsList } from "../components/previews-list";
import { Logo } from "../components/logo";
import { Contacts } from "../components/contacts";
import { Container } from '../components/container';
import { TitleH1 } from '../components/title-h1';
import { Header } from '../components/header';

import { logo } from '../assets/img';

const Search = () => {
  return (
    <>
    <Header/>
    <main id="main" className="main">
        <Container>
            <div className="find">
              <TitleH1>Найти догситера</TitleH1>
            </div>
            <div className="search">
                <div className="boxes">
                    <CustomSection type="text">Где искать?</CustomSection>
                    <CustomSection type="select">Сортировка</CustomSection>
                </div>
                <a href="#">
                    <h1 className="reset">Сбросить настройки</h1>
                </a>
            </div>
            <p className="finded">Найдено: 2 догситтера</p>
            <div className="preview-map">
                <PreviewsList/>
                <div className="map">
                    <h1 className="temprorary">Интеграция с картой</h1>
                </div>
            </div>
        </Container>
    </main>
    <footer id="footer" className="footer">
        <Container>
            <Logo src={logo} alt="Человек с собакой" title="DogSittersFinder — любовь и забота о вашей собаке"/>
            <Contacts>+7 800 555-35-35</Contacts>
        </Container>
    </footer>
    </>
  );
};

export default Search;