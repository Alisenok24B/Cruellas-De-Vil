import React from 'react';
import { StyledUserPhoto } from './user-photo.styled';

export const UserPhoto = (props) => {
  return (<StyledUserPhoto src={props.src} alt={props.alt} />
    );
};