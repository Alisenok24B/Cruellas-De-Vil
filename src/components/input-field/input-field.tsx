import React from "react";
import { StyledInputGroup, StyledInput, StyledCut, StyledLabel } from './input-field.styled';


export function InputField (props) {
    return (
        <StyledInputGroup inColumn={props.inColumn}>
            <StyledInput name={props.name} id={props.id} type={props.type} placeholder=" " maxLength={props.maxLength}/>
            <StyledCut />
            <StyledLabel htmlFor={props.name} className="placeholder">{props.children}</StyledLabel>
        </StyledInputGroup>
    );
}