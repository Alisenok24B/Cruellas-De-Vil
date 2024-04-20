import React from "react";
import { Inp } from '../../components/inp/inp'

export function CustomSection (props) {
    return (
        <section className={`${props.className}`}>
            {props.type === 'text' && (
                <>
                    <h1>{ props.children }</h1>
                    <Inp type={`${props.type}`} name="where-find" placeholder="Страна, регион, город" />
                </>
            )}
            {props.type === 'select' && (
                <>
                    <h1>{ props.children }</h1>
                    <Inp type={`${props.type}`} placeholder="Сортировать по:" options={[
                            { value: "ascending", label: "Возрастанию цены" },
                            { value: "descending", label: "Убыванию цены" }]} />
                </>
            )}
        </section>
    )
}