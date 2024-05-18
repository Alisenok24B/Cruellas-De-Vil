import React from "react";

import { CustomSection } from "../components/custom-section";
import { PreviewsList } from "../components/previews-list";
import { Container } from '../components/container';
import { TitleH1 } from '../components/title-h1';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Footer } from '../components/footer';

import { StyledBoxes, StyledFind, StyledFinded, StyledMain, StyledMap, StyledPreviewMap, StyledReset, StyledSearch, StyledTemp } from './search.styled';


const Search = () => {
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
                {/* <a href="#">
                    <h1 className="reset">Сбросить настройки</h1>
                </a> */}
            </StyledSearch>
            <StyledFinded>Найдено: 2 догситтера</StyledFinded>
            <StyledPreviewMap>
                <PreviewsList/>
                <StyledMap>
                    <StyledTemp>Интеграция с картой</StyledTemp>
                </StyledMap>
            </StyledPreviewMap>
        </Container>
    </StyledMain>
    <Footer/>
    </>
  );
};

export default Search;