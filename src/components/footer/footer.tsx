import React from "react";

import { Logo } from "../../components/logo";
import { Contacts } from "../../components/contacts";

import { logo } from '../../assets/img';

import { StyledFooter, StyledFContainer } from "./footer.styled";

import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation()

    return (
    <StyledFooter id="footer" className="footer">
        <StyledFContainer>
            <Logo src={logo} alt="Человек с собакой">{t('dsf.pages.footer.signature')}</Logo>
            <Contacts>+7 800 555-35-35</Contacts>
        </StyledFContainer>
    </StyledFooter>
    );
}