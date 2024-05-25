import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { StyledLink } from './link.styled';

interface LinkProps {
    href: string;
    children: React.ReactNode;
    contrast?: boolean;
    exit?: boolean;
}

export const Link = (props: LinkProps) => {
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const linkProps: any = {};
    
    const handleNavigation = (e) => {
        if (props.exit) {
            e.preventDefault();
            sessionStorage.removeItem('isAuthenticated');
            sessionStorage.removeItem('userRole');
            navigate(props.href);
        }
    };

    return (
        <StyledLink 
            contrast={props.contrast} 
            href={props.href} 
            exit={props.exit} 
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
