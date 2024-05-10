import React from "react"

import { Inp } from '../../components/inp/inp'
import { StyledCustomSectionPlace } from "./custom-section.styled"
import { StyledCustomSectionSort } from "./custom-section.styled"
import { InputField } from '../input-field'

export function CustomSection (props) {
    return (
        <section className={`${props.className}`}>
            {props.type === 'text' && (
                <StyledCustomSectionPlace>
                    <h1>{ props.children }</h1>
                    <InputField name="where-find" id="where-find" type="text" max-length={100}>Страна, регион, город</InputField>
                </StyledCustomSectionPlace>
            )}
            {props.type === 'select' && (
                <StyledCustomSectionSort>
                    <h1>{ props.children }</h1>
                    <Inp type={`${props.type}`} placeholder="Сортировать по:" options={[
                            { value: "ascending", label: "Возрастанию цены" },
                            { value: "descending", label: "Убыванию цены" }]} />
                </StyledCustomSectionSort>
            )}
        </section>
    )
}