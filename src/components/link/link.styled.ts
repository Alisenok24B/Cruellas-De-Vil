import styled from "@emotion/styled";
import { Link as ConnectedLink } from 'react-router-dom';

export const StyledLink = styled(ConnectedLink)<{
    contrast?: boolean;
    exit?: boolean;
  }>`
    color: ${( props: any ) => props.exit ? 'var(--black)' : 'var(--grey)'};
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    text-decoration: none;

    svg {
        height: 70%;
        width: 70%;
    }

    svg path {
        fill: ${( props: any ) => props.contrast ? 'var(--green)' : 'var(--black)'};
    }
`;