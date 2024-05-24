import React from "react";
import { StyledCheckBox, StyledCheckBoxLabel, StyledCheckboxInput } from "./check-box.styled";

export function CheckBox (props) {
    const { name, id, onChange, checked } = props;

    return (
        <StyledCheckBox>
            <StyledCheckboxInput name={name} type="checkbox" id={id} hidden onChange={onChange} checked={checked} />
            <StyledCheckBoxLabel htmlFor={name} className="checkbox-label"></StyledCheckBoxLabel>
            {props.children}
        </StyledCheckBox>
    );
}
