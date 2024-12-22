import React from "react";
import { useNavigate } from 'react-router-dom';
import { StyledLink } from './link.styled';
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user.slice";

interface LinkProps {
    href: string;
    children: React.ReactNode;
    contrast?: boolean;
    exit?: boolean;
    logout?: boolean;
}

export const Link = (props: LinkProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const linkProps: any = {};
    
    const handleNavigation = (e) => {
        if (props.exit || props.logout) {
            e.preventDefault();
            dispatch(userActions.logout())
            navigate(props.href);
        }
    };

    return (
        <StyledLink 
            contrast={props.contrast} 
            href={props.href} 
            exit={props.exit} 
            logout={props.logout}
            to={props.href} 
            onClick={handleNavigation}
            {...linkProps}
        >
            {props.children}
        </StyledLink>
    );
};

Link.defaultProps = {
    contrast: false,
    exit: false,
};
