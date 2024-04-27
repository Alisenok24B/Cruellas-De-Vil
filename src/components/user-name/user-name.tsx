import React from 'react';
import { StyledUserName } from './user-name.styled';

export const UserName = (props) => {
  return (<StyledUserName>{props.children}</StyledUserName>
    );
};