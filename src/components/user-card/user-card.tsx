import React from 'react';
import { 
  StyledUserCard, 
  UserPhotoWrapper, 
  UserPhoto, 
  UserName, 
  UserRating, 
  UserInfoWrapper, 
  UserInfoItem, 
  UserAbout, 
  UserAboutTitle, 
  UserAboutText, 
  ButtonContainer 
} from './user-card.styled';
import { StyledButton } from '../button/button.styled';
import { Button } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
import { StarFilled } from '@ant-design/icons';
import userPhoto from '../../assets/img/user_photo.jpg';

export const UserCard = ({ userData, isEditable, onEdit, onRate }) => {
  if (!userData) {
    return <div>Нет данных для отображения.</div>;
  }

const handleTelegramClick = () => {
  const telegramLink = `https://t.me/${userData.tg}`;
  window.open(telegramLink, '_blank');
};

  return (
    <StyledUserCard>
      <UserPhotoWrapper>
        <UserPhoto src={userPhoto} alt={`Фото ${userData.first_name} ${userData.second_name}`} />
        <div className="user-name-rating">
          <UserName>{userData.first_name} {userData.second_name}</UserName>
          {userData.rating && (
            <UserRating>
              <StarFilled />
              <span>{userData.rating.toFixed(1)}</span>
            </UserRating>
          )}
        </div>
      </UserPhotoWrapper>


      <UserInfoWrapper>
        <UserInfoItem>
          <strong>Местоположение:</strong> <span>{userData.location}</span>
        </UserInfoItem>
        <UserInfoItem>
          <strong>Стоимость:</strong> <span>{userData.price} руб/день</span>
        </UserInfoItem>
        <UserInfoItem>
          <strong>Телефон:</strong> <span>{userData.phone_number}</span>
        </UserInfoItem>

        <UserAbout>
          <UserAboutTitle>Обо мне</UserAboutTitle>
          <UserAboutText>{userData.about_me}</UserAboutText>
        </UserAbout>

        <ButtonContainer>
          {isEditable ? (
            <StyledButton onClick={onEdit}>Редактировать</StyledButton>
          ) : (
            <>
              <Button
                onClick={handleTelegramClick}
                type="dashed"
                icon={<EditTwoTone twoToneColor="#96A467" />}
                iconPosition="end"
              >
                Telegram
              </Button>
              <StyledButton
                onClick={onRate}
              >
                Оценить услугу
              </StyledButton>
            </>
          )}
        </ButtonContainer>
      </UserInfoWrapper>
    </StyledUserCard>
  );
};
