import React from "react";

import { HeaderElements } from '../header-elements';
import { Container } from '../container';

import { logo } from '../../assets/img';

export function Header(props) {
    return (
        <Container>
            <HeaderElements src={logo} alt="Человек с собакой"/>
        </Container>
    );
}