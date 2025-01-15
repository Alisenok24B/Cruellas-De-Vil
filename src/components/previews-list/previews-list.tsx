import React from "react";
import user_photo from '../../assets/img/user_photo.jpg';
import { StyledPreviewsList, StyledA, StyledPLDesc, StyledPLCostRH, StyledPLFullDesc, StyledPLFullNameCost, StyledPLLi, 
  StyledPLPhoto, StyledPLPhotoImg, StyledSelectedLi, StyledRating } from "./previews-list.styled";

import { URLs } from "../../__data__/urls";

import { Button } from "antd";
import { EditTwoTone, StarTwoTone } from '@ant-design/icons';

function Preview({ userId, userIndex, userPhoto, fullName, cost, rating, fullDesc, selected, tg }) {
  const StyledLi = selected ? StyledSelectedLi : StyledPLLi;

  let url = "#";
  if (URLs.ui.dogsitterViewing) {
    url = `${URLs.ui.dogsitterViewing}?id=${userId}`;
  }

  const message = "Здравствуйте! Я хочу заказать у Вас услугу догситтера, подскажите, пожалуйста, в какое время Вы свободны?"

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const telegramUrl = `https://t.me/${tg}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <StyledA href={url}>
      <StyledLi>
        <StyledPLPhoto>
          <StyledPLPhotoImg src={userPhoto} alt="Фото пользователя" />
        </StyledPLPhoto>
        <StyledPLDesc>
          <StyledPLFullNameCost>{userIndex}. {fullName}</StyledPLFullNameCost>
          <StyledPLFullNameCost>
            <StyledPLCostRH>{cost}</StyledPLCostRH> руб/час
          </StyledPLFullNameCost>
          <StyledRating>
            <StarTwoTone twoToneColor="#96A467" />
            <p>{rating}</p>
          </StyledRating>
          <StyledPLFullDesc>{fullDesc}</StyledPLFullDesc>
          <Button onClick={handleClick} type="dashed" icon={<EditTwoTone twoToneColor="#96A467" />} iconPosition="end">
            Написать в Telegram
          </Button>
        </StyledPLDesc>
      </StyledLi>
    </StyledA>
  );
}

export function PreviewsList({ users, currentPoint }) {
  return (
    <StyledPreviewsList>
      {users.map((user, index) => (
        <Preview selected={user.id === currentPoint}
          key={index}
          userIndex={index + 1}
          userPhoto={user_photo}
          fullName={`${user.first_name} ${user.second_name}`}
          cost={user.price}
          rating={user.rating}
          fullDesc={user.about_me}
          userId={user.id}
          tg={user.tg}
        />
      ))}
    </StyledPreviewsList>
  );
}