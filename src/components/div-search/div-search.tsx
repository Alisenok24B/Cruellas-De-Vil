import React from "react";

import { StyledSearch, StyledBoxes, StyledReset } from "./div-search.styled";
import { CustomSection } from "../custom-section";
import { Button } from "../button";

export function DivSearch ({formValues, setFormValues, users, setUsers}) {
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

        if (value === 'ascending') {
            const sortedUsers = [...users].sort((a, b) => a.price - b.price);
            setUsers(sortedUsers);
          } else if (value === 'descending') {
            const sortedUsers = [...users].sort((a, b) => b.price - a.price);
            setUsers(sortedUsers);
          }
    };
    
    const handleReset = () => {
        setFormValues({ 'where-find': '', 'sort-by': '' });
        // window.location.reload();
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
                <Button isReset onClick={handleReset}>Сбросить настройки</Button>
            </StyledReset>
        </StyledSearch>
    );
}