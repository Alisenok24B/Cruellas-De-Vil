import React from "react"

import { Inp } from '../../components/inp/inp'
import { StyledCustomSectionPlace } from "./custom-section.styled"
import { StyledCustomSectionSort } from "./custom-section.styled"

export function CustomSection (props) {
    return (
        <section className={`${props.className}`}>
            {props.type === 'text' && (
                <StyledCustomSectionPlace>
                    <h1>{ props.children }</h1>
                    <Inp type={`${props.type}`} name="where-find" placeholder="Страна, регион, город" />
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