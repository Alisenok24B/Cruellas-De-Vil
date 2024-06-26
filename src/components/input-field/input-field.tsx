import React from "react";
import InputMask from 'react-input-mask';
import { icon_error } from '../../assets/img';
import { StyledInputGroup, StyledInput, StyledCut, StyledLabel, ErrorIcon, ErrorMessage, StyledInputContainer } from './input-field.styled';

export function InputField({ name, id, type, maxLength, children, error, onChange, onBlur, onFocus, value, mask }) {
    const handleLocalChange = (e) => {
        onChange(e);
    };

    return (
        <StyledInputContainer>
            <StyledInputGroup onError={error}>
                {mask ? (
                    <InputMask
                        mask={mask}
                        value={value}
                        onChange={handleLocalChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        maskChar={null} // Это уберет символы заполнителя
                    >
                        {(inputProps) => (
                            <StyledInput
                                {...inputProps}
                                name={name}
                                id={id}
                                type={type}
                                placeholder=" "
                                maxLength={maxLength}
                                onError={error}
                            />
                        )}
                    </InputMask>
                ) : (
                    <StyledInput
                        name={name}
                        id={id}
                        type={type}
                        placeholder=" "
                        maxLength={maxLength}
                        onChange={handleLocalChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onError={error}
                        value={value}
                    />
                )}
                {error && <ErrorIcon><img src={icon_error} alt="Красный крест. Ошибка" /></ErrorIcon>}
                <StyledCut />
                <StyledLabel htmlFor={name} className="placeholder">{children}</StyledLabel>
            </StyledInputGroup>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </StyledInputContainer>
    );
}
