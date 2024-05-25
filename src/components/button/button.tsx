import React from 'react';
import { StyledButton, Icon } from './button.styled';

export function Button (props) {
    return (
        <StyledButton 
            type={props.type} 
            isGoogle={props.isGoogle} 
            onClick={props.onClick}
        >
            {props.isGoogle && props.icon && <Icon src={props.icon} alt="Google" />}
            {props.children}
        </StyledButton>
    );
}
