import styled from "@emotion/styled";

export const Wrapper = styled.div`
    background: var(--white);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px var(--shadow-color);
    width: 400px;
    max-width: calc(100% - 128px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: min-content;
`

export const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`

export const Title = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

export const Form = styled.form`
    align-items: center;
    width: 100%;
`

export const SubmitButton = styled.div`
    display: flex;
    justify-content: center;
`

export const GoogleAuthButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`
export const CheckboxesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 15px 0;
    flex-wrap: wrap;
`
