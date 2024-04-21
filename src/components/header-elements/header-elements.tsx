import React from "react";
import { Menu } from '../menu'
import { Logo } from '../logo'

import { StyledHeaderElements } from "./header-elements.styled"

export function HeaderElements(props) {
    return (
        <StyledHeaderElements className={`${props.className}`}>
            <Logo src={`${props.src}`} alt={`${props.alt}`}></Logo>
            <Menu className="menu show-profile"/>
        </StyledHeaderElements>
    );
}