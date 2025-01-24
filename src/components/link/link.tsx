import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "./link.styled";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user.slice";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  contrast?: boolean;
  exit?: boolean;
  logout?: boolean;
  /**
   * Дополнительный onClick, чтобы можно было переопределить логику
   * (например, сбросить step).
   */
  onClick?: (e) => void;
}

export const Link = (props: LinkProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const linkProps: any = {};

  const handleNavigation = (e) => {
    // Сначала вызываем пользовательский onClick (если есть)
    if (props.onClick) {
      props.onClick(e);
    }

    // Если пользовательский onClick не вызвал e.preventDefault(),
    // значит можно выполнить нашу логику (exit/logout).
    if (!e.defaultPrevented) {
      if (props.exit || props.logout) {
        e.preventDefault();
        dispatch(userActions.logout());
        navigate(props.href);
      }
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
