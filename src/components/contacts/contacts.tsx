import React from "react"

import { StyledContacts } from "./contacts.styled"

export function Contacts (props) {
    return (
        <StyledContacts className={`${props.className}`}>
            <p>Контактная информация:</p>
            <p>{props.children}</p>
        </StyledContacts>
    )
}