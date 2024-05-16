import styled from "@emotion/styled";

export const StyledLink = styled.a`
    align-items: center;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    color: ${( props: any ) => props.exit ? 'var(--black)' : 'var(--grey)'};
    cursor: pointer;
    font-size: 16px;
    height: 30px;
    padding: 5px;
    text-align: center;
    margin: 10px;
    text-decoration: none;

    svg {
        max-height: 200%;
        max-width: 200%;
    }

    svg path {
        fill: ${( props: any ) => props.contrast ? 'var(--green)' : 'var(--black)'};
    }
`;