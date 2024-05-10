import React from "react"

import { StyledLogo } from "./logo.styled"
import { StyledLogoImg } from "./logo.styled"

export function Logo(props) {
  return (
    <StyledLogo>
        <StyledLogoImg src={props.src} alt={props.alt}/>
        {props.title && <p>{props.title}</p>}
    </StyledLogo>
  );
}