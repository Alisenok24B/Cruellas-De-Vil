import React from "react";
import { StyledSearch, StyledBoxes, StyledReset, LottieWrapper } from "./div-search.styled";
import { CustomSection } from "../custom-section";
import { Button } from "../button";
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';

export function DivSearch({ formValues, setFormValues, users, setUsers }) {
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
        } else if (value === 'rating') {
            const sortedUsers = [...users].sort((a, b) => b.rating - a.rating);
            setUsers(sortedUsers);
        }
    };

    const handleReset = () => {
        setFormValues({ 'where-find': '', 'sort-by': '' });
        // window.location.reload();
    };

    const { t } = useTranslation()

    return (
        <StyledSearch>
            <StyledBoxes>
                <CustomSection
                    type="text"
                    value={formValues['where-find']}
                    onChange={handleWhereFindChange}>{t('dsf.pages.search.where_look')}</CustomSection>
                <CustomSection type="select"
                    value={formValues['sort-by']}
                    onChange={handleSortByChange}>{t('dsf.pages.search.sort')}</CustomSection>
            </StyledBoxes>
            <StyledReset>
                <Button isReset onClick={handleReset}>{t('dsf.pages.search.reset')}</Button>
            </StyledReset>
            <LottieWrapper>
                <Lottie animationData={require('src/assets/img/search_background.json')} />
            </LottieWrapper>
        </StyledSearch>
    );
}