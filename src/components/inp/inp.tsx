import React from "react"

import { StyledInp } from "./inp.styled"
import { StyledInpCut } from "./inp.styled"
import { StyledInpInput } from "./inp.styled"
import { StyledInpLabel } from "./inp.styled"
import { StyledInpSelect } from "./inp.styled"

export function Inp(props) {
    return (
        <StyledInp className="inp">
            {props.type === 'text' && (
                <>
                    <StyledInpInput name={props.name} placeholder=" "/>
                    <StyledInpCut className="cut"></StyledInpCut>
                    <StyledInpLabel htmlFor={props.name} className="placeholder">{props.placeholder}</StyledInpLabel>
                </>
            )}
            {props.type === 'select' && (
                <StyledInpSelect>
                    <option value="" disabled selected>{props.placeholder}</option>
                    {props.options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </StyledInpSelect>
            )}
        </StyledInp>
    );
}