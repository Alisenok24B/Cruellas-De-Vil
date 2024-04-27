import React from 'react';
import { UserPhoto } from '../user-photo';
import { UserName } from '../user-name';
import { StyledUserData } from './user-data.styled';

export const UserData = (props) => {
  return (
    <StyledUserData>
      <UserPhoto photoSrc={props.src} photoAlt={props.alt} />
      <UserName>{props.name}</UserName>
    </StyledUserData>
  );
};