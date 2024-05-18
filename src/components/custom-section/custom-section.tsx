import React, { useState } from "react"

import { Inp } from '../../components/inp/inp'
import { StyledCustomSectionPlace } from "./custom-section.styled"
import { StyledCustomSectionSort } from "./custom-section.styled"
import { InputField } from '../input-field'

const InputFields = () => {
    const [formValues, setFormValues] = useState({ 'where-find': '' });
    const [formErrors, setFormErrors] = useState({ 'where-find': '' });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        // Validate the field
        const error = validateLocation(value);
        setFormErrors({ ...formErrors, [name]: error });
    };
  
    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = value ? validateLocation(value) : "";
        setFormErrors({ ...formErrors, [name]: error });
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        if (!formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };
  
  
    return (
        <InputField
            name="where-find"
            id="where-find"
            type="text"
            maxLength={100}
            error={formErrors['where-find']}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
        >
            Страна, регион, город
        </InputField>
    );
};

const validateLocation = (value) => {
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s.,-]+$/;
    if (!nameRegex.test(value)) {
        return "Поле должно содержать только буквы, '-', '.' и ','";
    }
    return "";
};


export function CustomSection (props) {
    return (
        <section>
            {props.type === 'text' && (
                <StyledCustomSectionPlace>
                    <h1>{ props.children }</h1>
                    <InputFields/>
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