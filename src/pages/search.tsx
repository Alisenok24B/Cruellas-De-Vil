import React from "react";

import './styles_for_search.css';

import { Nav } from '../components/nav/nav'
import { CustomSection } from "../components/custom-section"
import { PreviewsList } from "../components/previews-list"
import { Logo } from "../components/logo"
import { Contacts } from "../components/contacts"
import { Container } from '../components/container/container'

import { logo } from '../assets/img'

const Search = () => {
  return (
    <>
      <header id="header" className="header">
        <Container className="container">
            <Nav className="nav" src={logo} alt="Человек с собакой"/>
        </Container>
    </header>
    <main id="main" className="main">
        <Container className="container">
            <h1 className="find">Найти догситтера</h1>
            <div className="search">
                <div className="boxes">
                    <CustomSection className="place" type="text">Где искать?</CustomSection>
                    <CustomSection className="sort" type="select">Сортировка</CustomSection>
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
        <Container className="container">
            <Logo className="logo" src={logo} alt="Человек с собакой" title="DogSittersFinder — любовь и забота о вашей собаке"/>
            <Contacts className="contacts">+7 800 555-35-35</Contacts>
        </Container>
    </footer>
    </>
  );
};

export default Search;