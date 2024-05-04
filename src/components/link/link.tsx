import React from "react"

import { StyledLink } from './link.styled'


export function Link (props) {
    return (
        <StyledLink href={props.href}>{props.children}</StyledLink>
    )
}