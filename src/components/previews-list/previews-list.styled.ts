import styled from "@emotion/styled"


export const StyledPreviewsList = styled.ul`
    width: 50%;
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

export const StyledPLDesc = styled.img`
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

    @media only screen and (max-width: 715px) {
        display: none;
    }
`

export const StyledPLFullNameCost = styled.p`
@media only screen and (max-width: 715px) {
    margin-left: 5px;
    font-size: 20px;
}
`