import React from "react";
import { Menu } from '../menu'
import { Logo } from '../logo'

import { StyledHeaderElements } from "./header-elements.styled"

export function HeaderElements(props) {
    return (
        <StyledHeaderElements>
            <Logo src={`${props.src}`} alt={`${props.alt}`}></Logo>
            <Menu currentNavElement={props.currentNavElement}/>
        </StyledHeaderElements>
    );
}