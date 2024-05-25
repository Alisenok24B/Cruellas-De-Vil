import React from "react"

import { StyledLogo } from "./logo.styled"
import { StyledLogoImg } from "./logo.styled"

export function Logo(props) {
  return (
    <StyledLogo>
        <StyledLogoImg src={props.src} alt={props.alt} srcSet={props.srcSet} sizes={props.sizes} width={props.width}/>
        {props.children && <p>{props.children}</p>}
    </StyledLogo>
  );
}