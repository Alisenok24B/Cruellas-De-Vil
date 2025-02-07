import styled from "@emotion/styled";

// StyledPreviewsList, StyledPLLi, StyledPLPhoto, StyledSelectedLi, StyledRating, StyledFullname, StyledCost, StyledDivCost

export const StyledPreviewsList = styled.ul`
    width: 50%;

    margin-top: 0;
    padding-left: 0;
`

export const StyledLi = styled.li`
    margin-bottom: 10px;
    list-style-type: none;

    color: inherit;
    text-decoration: none;
`

export const StyledPhoto = styled.div`
    border-radius: 10px 0 0 10px;
    overflow: hidden;
    margin-right: -5px;
    z-index: 2;
    @media only screen and (max-width: 1220px) {
        display: none;
    }
`

export const StyledRating = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: -12px;

    @media only screen and (max-width: 715px) {
        margin-bottom: -5px;
    }
`

export const StyledFullname= styled.p`
    padding: 0;
    margin: 0;
`

export const StyledCost = styled.p`
    padding: 0;
    margin: 0;

    font-weight: 500;
`

export const StyledDivCost = styled.div`
    height: 25px;
    width: 65px;
    background-color: rgb(226, 227, 213);
    border-radius: 10%;
    text-align: center;
`