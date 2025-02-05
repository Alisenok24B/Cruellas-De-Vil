import React from "react"

import { StyledContacts } from "./contacts.styled"

import { useTranslation } from 'react-i18next';

export function Contacts (props) {
    const { t } = useTranslation()

    return (
        <StyledContacts>
            <p>{t('dsf.pages.footer.contact')}:</p>
            <p>{props.children}</p>
        </StyledContacts>
    )
}