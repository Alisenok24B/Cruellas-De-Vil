import React from "react";

import './css/styles_for_search.css';

import { CustomSection } from "../components/custom-section";
import { PreviewsList } from "../components/previews-list";
import { Container } from '../components/container';
import { TitleH1 } from '../components/title-h1';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Footer } from '../components/footer';

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
                <div className="reset">
                    <Button>Сбросить настройки</Button>
                </div>
                {/* <a href="#">
                    <h1 className="reset">Сбросить настройки</h1>
                </a> */}
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
    <Footer/>
    </>
  );
};

export default Search;