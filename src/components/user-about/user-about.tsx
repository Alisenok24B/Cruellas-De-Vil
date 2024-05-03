import React from 'react';
import { StyledUserAbout, StyledUserAboutTitle, StyledUserAboutText } from './user-about.styled';

export const UserAbout = (props) => {
  return (
    <StyledUserAbout>
      <StyledUserAboutTitle>{props.title}</StyledUserAboutTitle>
      <StyledUserAboutText>{props.children}</StyledUserAboutText>
    </StyledUserAbout>
  );
};