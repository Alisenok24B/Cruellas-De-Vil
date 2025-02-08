import React from "react";
import user_photo from '../../assets/img/user_photo.jpg';
import {
  StyledPreviewsList, StyledLi, StyledPhoto, StyledRating, StyledFullname, StyledCost, StyledDivCost
} from "./previews-list.styled";
import { URLs } from "../../__data__/urls";
import { Card, Button, Flex } from "antd";
import { EditTwoTone, StarTwoTone, EyeTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 278,
  height: 200
};

function Preview({ userId, userPhoto, fullName, cost, rating, fullDesc, selected, tg }) {
  let url = "#";
  if (URLs.ui.dogsitterViewing) {
    url = `${URLs.ui.dogsitterViewing}?id=${userId}`;
  }

  const handleClick = () => {
    window.location.href = url;
  };

  const { t } = useTranslation()

  const message = t('dsf.pages.search.message')

  const handleTelegramClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const telegramUrl = `https://t.me/${tg}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  const cardStyle = {
    width: 300,
    border: selected ? '3px solid #96A467' : '1px solid #d9d9d9',
    transition: 'all 0.1s ease'
  };

  return (
    <StyledLi>
      <Flex>
        <StyledPhoto>
          <img src={userPhoto} alt={t('dsf.pages.search.photo')} style={imgStyle} />
        </StyledPhoto>
        <Card
          hoverable
          style={cardStyle}
          actions={[
            <Button key="profileButton" onClick={handleClick} type="dashed" icon={<EyeTwoTone twoToneColor="#96A467" />} iconPosition="end">
              {t('dsf.pages.search.profile')}
            </Button>,
            <Button key="telegramButton" onClick={handleTelegramClick} type="dashed" icon={<EditTwoTone twoToneColor="#96A467" />} iconPosition="end">
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
        <Preview 
          key={index}
          selected={user.id === currentPoint}
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