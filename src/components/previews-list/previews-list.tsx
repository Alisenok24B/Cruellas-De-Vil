import React from "react";
import user_photo from '../../assets/img/user_photo.jpg';
import { StyledPreviewsList, StyledA, StyledPLDesc, StyledPLCostRH, StyledPLFullDesc, StyledPLFullNameCost, StyledPLLi, StyledPLPhoto, StyledPLPhotoImg, StyledSelectedLi } from "./previews-list.styled";

import { URLs } from "../../__data__/urls";

function Preview({ userId, userIndex, userPhoto, fullName, cost, fullDesc, selected }) {
  const StyledLi = selected ? StyledSelectedLi : StyledPLLi;

  return (
    <StyledA href={`${URLs.ui.dogsitterViewing}?id=${userId}`}>
      <StyledLi>
        <StyledPLPhoto>
          <StyledPLPhotoImg src={userPhoto} alt="Фото пользователя"/>
        </StyledPLPhoto>
        <StyledPLDesc>
          <StyledPLFullNameCost>{userIndex}. {fullName}</StyledPLFullNameCost>
          <StyledPLFullNameCost>
            Стоимость: <StyledPLCostRH>{cost}</StyledPLCostRH> руб/час
          </StyledPLFullNameCost>
          <StyledPLFullDesc>{fullDesc}</StyledPLFullDesc>
        </StyledPLDesc>
      </StyledLi>
    </StyledA>
  );
}

export function PreviewsList({users, currentPoint}) {
  return (
    <StyledPreviewsList>
      {users.map((user, index) => (
        <Preview selected={user.id === currentPoint}
          key={index}
          userIndex={index + 1}
          userPhoto={user_photo}
          fullName={`${user.first_name} ${user.second_name}`}
          cost={user.price}
          fullDesc={user.about_me}
          userId={user.id}
        />
      ))}
    </StyledPreviewsList>
  );
}