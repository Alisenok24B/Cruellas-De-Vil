import React from "react";

import { Logo } from "../../components/logo";
import { Contacts } from "../../components/contacts";

import { logo } from '../../assets/img';

import { StyledFooter, StyledFContainer } from "./footer.styled";

export function Footer() {
    return (
    <StyledFooter id="footer" className="footer">
        <StyledFContainer>
            <Logo src={logo} alt="Человек с собакой" title="DogSittersFinder — любовь и забота о вашей собаке"/>
            <Contacts>+7 800 555-35-35</Contacts>
        </StyledFContainer>
    </StyledFooter>
    );
}