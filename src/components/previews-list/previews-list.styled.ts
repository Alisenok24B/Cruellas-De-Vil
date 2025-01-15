import styled from "@emotion/styled"

export const StyledA = styled.a`
    color: inherit;
    text-decoration: none;
`

export const StyledPreviewsList = styled.ul`
    width: 50%;

    margin-top: 0;
    padding-left: 0;
`

export const StyledPLLi = styled.li`
    width: 85%;
    height: 190px;

    display: flex;
    align-items: center;

    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    margin-bottom: 10px;
`

export const StyledSelectedLi = styled.li`
    width: 85%;
    height: 190px;

    display: flex;
    align-items: center;

    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: inset 0 4px 4px 0 rgba(129, 106, 88, 0.85);

    margin-bottom: 10px;
`

export const StyledPLPhoto = styled.div`
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
    margin-top: -20px;
    margin-bottom: -20px;

    @media only screen and (max-width: 715px) {
        margin-bottom: -5px;
    }
`