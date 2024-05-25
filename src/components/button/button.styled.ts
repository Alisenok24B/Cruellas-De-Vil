import styled from "@emotion/styled";

export const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    padding: ${( props: any ) => props.isGoogle ? '10px 15px' : '10px'};
    background-color: ${(props: any) => (props.isReset ? 'var(--grey)' : (props.isGoogle ? 'var(--white)' : 'var(--green)'))};
    color: ${( props: any ) => props.isGoogle ? 'var(--brown)' : 'var(--white)'};
    font-size: ${(props: any) => (props.isReset ? '22px' : (props.isGoogle ? '14px' : '16px'))};
    display: ${( props: any ) => props.isGoogle ? 'flex' : 'block'};
    align-items: center;
    justify-content: center;
    border: ${( props: any ) => props.isGoogle ? '2px solid var(--brown)' : 'none'};
    font-weight:  ${( props: any ) => props.isReset ? '700' : '400'};
    text-decoration:  ${( props: any ) => props.isReset ? 'underline' : 'none'};

    &:hover {
        box-shadow: 0 2px 6px var(--shadow-color);
    }
`;

export const Icon = styled.img`
    margin-right: 10px;
`;
