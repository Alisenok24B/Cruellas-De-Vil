import React from "react";
import { useEffect, useState } from "react";

import { CustomSection } from "../components/custom-section";
import { PreviewsList } from "../components/previews-list";
import { Container } from '../components/container';
import { TitleH1 } from '../components/title-h1';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Footer } from '../components/footer';

import { StyledBoxes, StyledFind, StyledFinded, StyledMain, StyledMap, StyledPreviewMap, StyledReset, StyledSearch } from './search.styled';

import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Form } from "./login-register.styled";

// const изменить координаты в карте - 2 параметра (широта и долгота)

const Search = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=cd99061c-900b-4ae4-a9ae-60d9e98c6827&lang=ru_RU';
        script.async = true;

        script.onload = () => {
            console.log('Yandex Maps API loaded');
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

  return (
    <>
    <Header currentNavElement={"Карта"}/>
    <StyledMain>
        <Container>
            <StyledFind>
              <TitleH1>Найти догситера</TitleH1>
            </StyledFind>
            <StyledSearch>
                <StyledBoxes>
                    <CustomSection type="text">Где искать?</CustomSection>
                    <CustomSection type="select">Сортировка</CustomSection>
                </StyledBoxes>
                <StyledReset>
                    <Button>Сбросить настройки</Button>
                </StyledReset>
            </StyledSearch>
            <StyledFinded>Найдено: 2 догситтера</StyledFinded>
            <StyledPreviewMap>
                <PreviewsList/>
                <StyledMap>
                    <YMaps>
                        <Map defaultState={{ center: [55.753215, 37.622504], zoom: 10 }} width="100%" height="100%">
                            {/* <Placemark geometry={[55.753215, 37.622504]}/> */}
                        </Map>
                    </YMaps>
                </StyledMap>
            </StyledPreviewMap>
        </Container>
    </StyledMain>
    <Footer/>
    </>
  );
};

export default Search;