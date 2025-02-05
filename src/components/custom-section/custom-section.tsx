import React, { useState } from "react";
import { InputSelect } from '../input-select/input-select';
import { StyledCustomSectionPlace } from "./custom-section.styled";
import { StyledCustomSectionSort } from "./custom-section.styled";
import { InputField } from '../input-field';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation()

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
            {t('dsf.pages.search.where_look.placeholder')}
        </InputField>
    );
};

const validateLocation = (value) => {
    const { t } = useTranslation()
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s.,-]+$/;
    if (!nameRegex.test(value)) {
        return t('dsf.pages.search.where_look.validate');
    }
    return "";
};


export function CustomSection (props) {
    const { t } = useTranslation()
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
                    placeholder={t('dsf.pages.search.sort.placeholder')}
                    options={[
                            { value: "ascending", label: t('dsf.pages.search.sort.asc') },
                            { value: "descending", label: t('dsf.pages.search.sort.desc') },
                            { value: "rating", label: t('dsf.pages.search.sort.rating') }]} />
                </StyledCustomSectionSort>
            )}
        </section>
    )
}