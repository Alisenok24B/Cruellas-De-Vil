import React from "react"

import { StyledInp } from "./input-select.styled"
import { StyledInpSelect } from "./input-select.styled"

export function InputSelect(props) {
    return (
        <StyledInp className="inp">
            <StyledInpSelect>
                <option value="" disabled selected>{props.placeholder}</option>
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                    ))}
            </StyledInpSelect>
        </StyledInp>
    );
}