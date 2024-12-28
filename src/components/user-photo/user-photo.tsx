import React from 'react';
import { StyledUserPhoto } from './user-photo.styled';
import user_photo from '../../assets/img/user_photo.jpg'

export const UserPhoto = (props) => {
  return (<StyledUserPhoto src={user_photo} alt={props.alt} />
    );
};
