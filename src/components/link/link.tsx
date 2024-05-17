import React from "react"

import { StyledLink } from './link.styled'


interface LinkProps {
    href: string;
    children: React.ReactNode;
    contrast?: boolean;
    exit?: boolean;
}

export const Link = (props: LinkProps) => {
    const linkProps: any = {}
    return (
        <StyledLink contrast={props.contrast} href={props.href} exit={props.exit} to={props.href} {...linkProps}>{props.children}</StyledLink>
    )
}

Link.defaultProps = {
    contrast: false,
    exit: false,
}
