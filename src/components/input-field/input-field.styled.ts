import styled from "@emotion/styled";


export const StyledInputGroup = styled.div`
    height: 60px;
    position: relative;
    width: 100%;
    overflow: hidden;
    //margin-bottom: ${(props: any) => props.inColumn ? '5px' : '0px'};
`;

export const StyledInput = styled.input`
    border-radius: 8px;
    border: 2px solid ${(props: any) => props.error ? 'var(--red)' : 'var(--grey)'};
    box-sizing: border-box;
    color: var(--black);
    font-size: 20px;
    height: 66%;
    padding: 4px 10px 0;
    width: 100%;
    transition: border-color 200ms;
    
    &:focus {
        border: 3px solid ${(props: any) => props.error ? 'var(--red)' : 'var(--green)'};
        outline: none;
        caret-color: ${(props: any) => props.error ? 'var(--red)' : 'var(--green)'};
    }

    &:focus ~ div,
    &:not(:placeholder-shown) ~ div {
        transform: translateY(14px);
    }

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
        transform: translateY(-10px) translateX(0px) scale(0.75);
        color: var(--black)
    };
    

    &:not(:placeholder-shown) ~ label {
        color: var(--black)
    };
    
`;

export const ErrorIcon = styled.span`
    position: absolute;
    right: 10px;
    top: 12px;
`;

export const StyledCut = styled.div`
    border-radius: 8px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 82px;
`;

export const StyledLabel = styled.label`
    color: var(--grey);
    left: 10px;
    line-height: 24px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 5px;
`;

export const ErrorMessage = styled.div`
    color: var(--black);
    font-size: 12px;
    margin-top: -14px;
    margin-left: 5px;
`;