import React from "react";

import { useState } from "react";

import { StyledSearch, StyledBoxes, StyledReset } from "./div-search.styled";
import { CustomSection } from "../custom-section";
import { Button } from "../button";

export function DivSearch () {
    const [formValues, setFormValues] = useState({ 'where-find': '', 'sort-by': '' });

    const handleWhereFindChange = (e) => {
        const value = e.target.value;
        setFormValues(prevState => ({
            ...prevState,
            'where-find': value
        }));
    };

    const handleSortByChange = (e) => {
        const value = e.target.value;
        setFormValues(prevState => ({
            ...prevState,
            'sort-by': value
        }));
    };
    
    const handleReset = () => {
        setFormValues({ 'where-find': '', 'sort-by': '' });
    };

    return (
        <StyledSearch>
            <StyledBoxes>
                <CustomSection 
                type="text" 
                value={formValues['where-find']} 
                onChange={handleWhereFindChange}>Где искать?</CustomSection>
                <CustomSection type="select"
                value={formValues['sort-by']} 
                onChange={handleSortByChange}>Сортировка</CustomSection>
            </StyledBoxes>
            <StyledReset>
                <Button onClick={handleReset}>Сбросить настройки</Button>
            </StyledReset>
        </StyledSearch>
    );
}