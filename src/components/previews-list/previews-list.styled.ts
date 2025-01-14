import styled from "@emotion/styled";
import { Card } from 'antd';

export const StyledA = styled.a`
    color: inherit;
    text-decoration: none;
`

export const StyledPreviewsList = styled.ul`
    width: 50%;

    margin-top: 0;
    padding-left: 0;
`

export const StyledPL1Li = styled.li`
    width: 85%;
    height: 190px;

    display: flex;
    align-items: center;

    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    margin-bottom: 10px;
`

export const StyledPLLi = styled.li`
    margin-bottom: 10px;
    list-style-type: none;

    color: inherit;
    text-decoration: none;
`

export const StyledSelected1Li = styled.li`
    width: 85%;
    height: 190px;

    display: flex;
    align-items: center;

    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: inset 0 4px 4px 0 rgba(129, 106, 88, 0.85);

    margin-bottom: 10px;

    color: inherit;
    text-decoration: none;
`

export const StyledSelectedLi = styled.li`
    box-shadow: inset 0 4px 4px 0 rgba(129, 106, 88, 0.85);
    margin-bottom: 10px;
    list-style-type: none;
`

export const StyledPL1Photo = styled.div`
    width: 230px; 
    height: 150px; 

    border-radius: 50%;
    overflow: hidden; 
        
    margin-left: 35px;
    margin-right: 45px;

    @media only screen and (max-width: 1220px) {
        display: none;
    }
`

export const StyledPLPhoto = styled.div`
    border-radius: 10px 0 0 10px;
    overflow: hidden;
    margin-right: -5px;
    z-index: 2;
    @media only screen and (max-width: 1220px) {
        display: none;
    }
`

export const StyledPLPhotoImg = styled.img`
    width: 100%; 
    height: 100%; 

    object-fit: cover;
`

export const StyledPLDesc = styled.div`
    margin-right: 15px;
    width: 75%;

    @media only screen and (max-width: 1220px) {
        margin-left: 20px;
    }
`

export const StyledPLCostRH = styled.span`
    font-weight: bold;
`

export const StyledPLFullDesc = styled.p`
    color: #816A58;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 10px;

    @media only screen and (max-width: 715px) {
        display: none;
    }
`

export const StyledPLFullNameCost = styled.p`
    @media only screen and (max-width: 715px) {
        margin-left: 5px;
        font-size: 15px;
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