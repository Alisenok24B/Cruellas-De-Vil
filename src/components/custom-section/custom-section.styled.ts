import styled from "@emotion/styled"


export const StyledCustomSectionPlace = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
        
    margin-right: 250px;

    @media only screen and (max-width: 1024px) {
        margin-right: 0;
        margin-bottom: 20px;
    }

    font-size: 20px;
`

export const StyledCustomSectionSort = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 20px;

    @media only screen and (max-width: 1024px) {
        margin-bottom: 20px;
    }
`