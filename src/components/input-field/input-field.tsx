import React from "react";
import { icon_error } from '../../assets/img'
import { StyledInputGroup, StyledInput, StyledCut, StyledLabel, ErrorIcon, ErrorMessage, StyledInputContainer } from './input-field.styled';


export function InputField ({ name, id, type, maxLength, children, error, onChange, onBlur, onFocus }) {
    return (
        <StyledInputContainer>
        <StyledInputGroup error={error}>
            <StyledInput
                name={name}
                id={id}
                type={type}
                placeholder=" "
                maxLength={maxLength}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                error={error}
            />
            {error && <ErrorIcon><img src={icon_error} alt="Красный крест. Ошибка" /></ErrorIcon>}
            <StyledCut />
            <StyledLabel htmlFor={name} className="placeholder">{children}</StyledLabel>
            
        </StyledInputGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        </StyledInputContainer>
    );
}