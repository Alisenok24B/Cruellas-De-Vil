import React from "react"

import { StyledLink } from './link.styled'


export function Link (props) {
    return (
        <StyledLink contrast={props.contrast} href={props.href} exit={props.exit}>{props.children}</StyledLink>
    )
}