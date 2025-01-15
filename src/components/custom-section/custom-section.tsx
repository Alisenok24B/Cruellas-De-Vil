import React, { useState } from "react";

import { InputSelect } from '../input-select/input-select';
import { StyledCustomSectionPlace } from "./custom-section.styled";
import { StyledCustomSectionSort } from "./custom-section.styled";
import { InputField } from '../input-field';

const InputFields = ({value, onChange}) => {
    const [formErrors, setFormErrors] = useState({ 'where-find': '' });
  
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
            onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={value}
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
                    <InputFields
                    value={props.value} 
                    onChange={props.onChange}/>
                </StyledCustomSectionPlace>
            )}
            {props.type === 'select' && (
                <StyledCustomSectionSort>
                    <h1>{ props.children }</h1>
                    <InputSelect 
                    value={props.value} 
                    onChange={props.onChange} 
                    placeholder="Сортировать по:" 
                    options={[
                            { value: "ascending", label: "Возрастанию цены" },
                            { value: "descending", label: "Убыванию цены" },
                            { value: "rating", label: "Рейтингу" }]} />
                </StyledCustomSectionSort>
            )}
        </section>
    )
}