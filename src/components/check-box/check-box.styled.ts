import styled from "@emotion/styled";


export const StyledCheckBox = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
`;


export const StyledCheckBoxLabel = styled.label`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border: 2px solid var(--brown);
    border-radius: 4px;
    background-color: var(--beige);
    cursor: pointer;
    position: relative;
    font-size: 16;
`;

export const StyledCheckboxInput = styled.input`

    &:checked + label {
        background-color: var(--brown);
        border-color: var(--brown);
    }

    &:checked + label::after {
        content: "";
        position: absolute;
        left: 4px;
        width: 6px;
        height: 10px;
        border: solid var(--beige);
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`;
