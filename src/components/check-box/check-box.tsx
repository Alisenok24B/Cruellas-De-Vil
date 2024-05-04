import React from "react"

import { StyledCheckBox } from "./check-box.styled"
import { StyledCheckBoxLabel } from "./check-box.styled"
import { StyledCheckboxInput } from "./check-box.styled"


export function CheckBox (props) {
    return (
        <StyledCheckBox>
            <StyledCheckboxInput name={props.name} type="checkbox" id={props.id} hidden />
            <StyledCheckBoxLabel htmlFor={props.name} className="checkbox-label"></StyledCheckBoxLabel>
            {props.children}
        </StyledCheckBox>
    )
}
