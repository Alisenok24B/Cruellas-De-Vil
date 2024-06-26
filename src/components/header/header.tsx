import React from "react";

import { HeaderElements } from '../header-elements';
import { Container } from '../container';

import { logo } from '../../assets/img';

import { StyledHeader } from "./header.styled";

export function Header(props) {
    return (
        <StyledHeader>
            <Container>
                <HeaderElements currentNavElement={props.currentNavElement} src={logo} alt="Человек с собакой"/>
            </Container>
        </StyledHeader>
    );
}