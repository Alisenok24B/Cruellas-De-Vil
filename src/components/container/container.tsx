import React from "react"

import { StyledContainer } from "./container.styled"

export function Container (props) {
    return (
        <StyledContainer className={`${props.className}`}>
            { props.children }
        </StyledContainer>
    )
}


// const user = {
//     name: 'name',
//     age: 32
// }

// деструктуризация (разделяем на отдельные компоненты):
// const { name, age } = user