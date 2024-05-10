import React from "react"

import { StyledContacts } from "./contacts.styled"

export function Contacts (props) {
    return (
        <StyledContacts>
            <p>Контактная информация:</p>
            <p>{props.children}</p>
        </StyledContacts>
    )
}