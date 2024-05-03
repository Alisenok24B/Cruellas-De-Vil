import React from "react";
import user_photo from '../../assets/img/user_photo.jpg';

import { StyledPreviewsList } from "./previews-list.styled";
import { StyledPLLi } from "./previews-list.styled";
import { StyledPLPhoto } from "./previews-list.styled";
import { StyledPLPhotoImg } from "./previews-list.styled";
import { StyledPLDesc } from "./previews-list.styled";
import { StyledPLFullDesc } from "./previews-list.styled";
import { StyledPLFullNameCost } from "./previews-list.styled";
import { StyledPLCostRH } from "./previews-list.styled";

function Preview({ userPhoto, fullName, cost, fullDesc }) {
  return (
    <StyledPLLi>
      <StyledPLPhoto className="photo">
        <StyledPLPhotoImg src={userPhoto} alt="Фото пользователя"/>
      </StyledPLPhoto>
      <StyledPLDesc className="desc">
        <StyledPLFullNameCost className="fullname">{fullName}</StyledPLFullNameCost>
        <StyledPLFullNameCost className="cost">
          Стоимость: <StyledPLCostRH className="cost-rh">{cost}</StyledPLCostRH>
        </StyledPLFullNameCost>
        <StyledPLFullDesc className="fulldesc">{fullDesc}</StyledPLFullDesc>
      </StyledPLDesc>
    </StyledPLLi>
  );
}

export function PreviewsList() {
  const users = [
    {
      userPhoto: user_photo,
      fullName: "1. Имя Фамилия",
      cost: "1500 руб/час",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ..."
    },
    {
      userPhoto: user_photo,
      fullName: "2. Имя Фамилия",
      cost: "1500 руб/час",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ..."
    },
    // Остальные пользователи
  ];

  return (
    <StyledPreviewsList className="previews">
      {users.map((user, index) => (
        <Preview
          key={index}
          userPhoto={user.userPhoto}
          fullName={user.fullName}
          cost={user.cost}
          fullDesc={user.fullDesc}
        />
      ))}
    </StyledPreviewsList>
  );
}