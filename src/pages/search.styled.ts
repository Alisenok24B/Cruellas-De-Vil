import styled from "@emotion/styled";

export const StyledMain = styled.main`
    padding-top: 40px;
    padding-bottom: 40px;
`

export const StyledFind = styled.div`
    margin-bottom: 40px;
`

export const StyledSearch = styled.div`
    background: #C6C5C1;

    border-bottom: 10px solid #f5f5f5;
    border-left: 5px solid #f5f5f5;
    border-right: 5px solid #f5f5f5;
    border-top: 10px solid #f5f5f5;
    border-radius: 20px;

    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    padding-top: 20px;
    padding-bottom: 20px;

    color: #FFFFFF;
`

export const StyledBoxes = styled.form`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`

export const StyledReset = styled.div`
    color: #FFFFFF;
    text-decoration: underline;

    margin-top: 55px;
    margin-bottom: 25px;

    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        margin-top: 55px;
    }
`

export const StyledFinded = styled.p`
    text-align: right;

    font-size: 18px;

    margin-top: 20px;
    margin-bottom: 20px;
`

export const StyledPreviewMap = styled.div`
    display: flex;
`

export const StyledMap = styled.div`
    height: 650px;
    width: 50%;

    margin-left: auto;

    background:#816A58;
    border-radius: 12px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

export const StyledTemp = styled.h1`
    width: 100%; 
    height: 100%;
`
