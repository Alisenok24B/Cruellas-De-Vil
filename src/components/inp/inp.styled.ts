import styled from "@emotion/styled"


export const StyledInp = styled.div`
    position: relative;

    width: 413px;
    height: 60px;

    margin-top: 15px;
`

export const StyledInpInput = styled.input`
    border-radius: 8px;
    border: 2px solid #C6C5C1;
        
    box-sizing: border-box;
        
    color: #C6C5C1;

    font-size: 20px;
    font-family: 'Raleway', sans-serif;;
        
    height: 100%;
    width: 100%;
    padding: 4px 10px 0;
    transition: border-color 200ms;

    .input-find:focus ~ .cut,
    .input-find:not(:placeholder-shown) ~ .cut {
        transform: translateY(14px);
    }
    
    .input-find:focus ~ .placeholder,
    .input-find:not(:placeholder-shown) ~ .placeholder {
        transform: translateY(-20px) translateX(0px) scale(0.75);
    }
    
    .input-find:not(:placeholder-shown) ~ .placeholder {
        color: #C6C5C1;
    }
    
    .input-find:focus ~ .placeholder {
        color: rgba(0, 0, 0, 0.800);
    }

    .input-find:focus {
        border: 2px solid #96A467;
        outline: none;
    }
`

export const StyledInpSelect = styled.select`
    border-radius: 8px;
    border: 2px solid #C6C5C1;
        
    box-sizing: border-box;
        
    color: #C6C5C1;

    font-size: 20px;
    font-family: 'Raleway', sans-serif;;
        
    height: 100%;
    width: 100%;
    padding: 4px 10px 0;
    transition: border-color 200ms;

    .input-find:focus ~ .cut,
    .input-find:not(:placeholder-shown) ~ .cut {
        transform: translateY(14px);
    }
    
    .input-find:focus ~ .placeholder,
    .input-find:not(:placeholder-shown) ~ .placeholder {
        transform: translateY(-20px) translateX(0px) scale(0.75);
    }
    
    .input-find:not(:placeholder-shown) ~ .placeholder {
        color: #C6C5C1;
    }
    
    .input-find:focus ~ .placeholder {
        color: rgba(0, 0, 0, 0.800);
    }

    .input-find:focus {
        border: 2px solid #96A467;
        outline: none;
    }
`

export const StyledInpCut = styled.div`
    border-radius: 8px;
        
    height: 20px;
        
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 82px;
`

export const StyledInpLabel = styled.label`
    color: #C6C5C1;
        
    left: 10px;
    line-height: 24px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
        
    font-size: 20px;
`