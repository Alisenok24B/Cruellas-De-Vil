import React from 'react';
import { StyledTitleH1 } from './title-h1.styled';

export function TitleH1 (props) {
    return (
        <StyledTitleH1>{props.children}</StyledTitleH1>
    );
}