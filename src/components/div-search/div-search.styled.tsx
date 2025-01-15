import styled from "@emotion/styled"


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

    position: relative;
    z-index: 3;
`

export const StyledBoxes = styled.form`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }

    position: relative;
    z-index: 2;
`

export const StyledReset = styled.div`
    color: #FFFFFF;

    margin-top: 55px;
    margin-bottom: 25px;

    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        margin-top: 65px;
    }

    position: relative;
    z-index: 2;
`

export const LottieWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
`