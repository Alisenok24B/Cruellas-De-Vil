import React from 'react';
import { StyledUserInfo, StyledUserInfoItem } from './user-info.styled';

export const UserInfo = (props) => {
  return (
    <StyledUserInfo>
      <StyledUserInfoItem>Местоположение: {props.location}</StyledUserInfoItem>
      <StyledUserInfoItem>Цена за услуги: {props.price}</StyledUserInfoItem>
      <StyledUserInfoItem>Номер телефона: {props.phone}</StyledUserInfoItem>
    </StyledUserInfo>
  );
};