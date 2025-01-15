import React from "react";
import user_photo from '../../assets/img/user_photo.jpg';
import {
  StyledPreviewsList, StyledPLLi, StyledPhoto, StyledSelectedLi, StyledRating, StyledFullname, StyledCost, StyledDivCost
} from "./previews-list.styled";

import { URLs } from "../../__data__/urls";

import { Card, Button, Flex } from "antd";
import { EditTwoTone, StarTwoTone, EyeTwoTone } from '@ant-design/icons';

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 278,
  height: 200
};

function Preview({ userId, userPhoto, fullName, cost, rating, fullDesc, selected, tg }) {
  const StyledLi = selected ? StyledSelectedLi : StyledPLLi;

  let url = "#";
  if (URLs.ui.dogsitterViewing) {
    url = `${URLs.ui.dogsitterViewing}?id=${userId}`;
  }

  const handleClick = () => {
    window.location.href = url;
  };

  const message = "Здравствуйте! Я хочу заказать у Вас услугу догситтера, подскажите, пожалуйста, в какое время Вы свободны?"

  const handleTelegramClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const telegramUrl = `https://t.me/${tg}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <StyledLi>
      <Flex>
        <StyledPhoto>
          <img src={userPhoto} alt="Фото пользователя" style={imgStyle} />
        </StyledPhoto>
        <Card
          hoverable
          style={{ width: 300 }}
          actions={[
            <Button onClick={handleClick} type="dashed" icon={<EyeTwoTone twoToneColor="#96A467" />} iconPosition="end">
              Профиль
            </Button>,
            <Button onClick={handleTelegramClick} type="dashed" icon={<EditTwoTone twoToneColor="#96A467" />} iconPosition="end">
              Telegram
            </Button>,
          ]}
        >
          <Card.Meta
            avatar={<StyledRating>
              <StarTwoTone twoToneColor="#96A467" />
              <p>{rating}</p>
            </StyledRating>}
            title={<Flex justify="space-between">
              <StyledFullname>{fullName}</StyledFullname>
              <StyledDivCost>
                <StyledCost>{cost}</StyledCost>
              </StyledDivCost>
              </Flex>}
            description={fullDesc}
          />
        </Card>
      </Flex>
    </StyledLi>
  );
}

export function PreviewsList({ users, currentPoint }) {
  return (
    <StyledPreviewsList>
      {users.map((user, index) => (
        <Preview selected={user.id === currentPoint}
          key={index}
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