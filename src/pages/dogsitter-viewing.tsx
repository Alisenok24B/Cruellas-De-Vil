import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetDogsitterByIdQuery } from '../store/api/apiSlice';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { UserPhoto } from '../components/user-photo';
import { ModalWindow } from '../components/modal-window';
import { StyledButton } from '../components/button/button.styled';

import { RootState } from '../store/store';

import {
  ProfileWrapper,
  ProfileHeader,
  ProfileTitle,
  ProfileMain,
  ProfilePhoto,
  ProfileInfo,
  ProfileInfoItem,
  ProfileAbout,
  ProfileAboutTitle,
  ProfileAboutText,
} from './profile.styled';

const ProfileViewing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentUserId = useSelector((state: RootState) => state.user.id);

  const [searchParams] = useSearchParams();
  const userIdFromUrl = searchParams.get('id');
  console.log('User ID from URL:', userIdFromUrl);

  const { data: userData, isLoading, error } = useGetDogsitterByIdQuery(Number(userIdFromUrl), {
    skip: !userIdFromUrl,
  });

  console.log('Query status:', { isLoading, error, userData });

  const handleEditClick = () => setIsModalOpen(true);
  const handleModalSave = (updatedUserData) => {
    console.log('Updated user data:', updatedUserData);
    setIsModalOpen(false);
  };
  const handleModalCancel = () => setIsModalOpen(false);

  if (isLoading) return <div>Загрузка...</div>;
  if (error || !userData) {
    console.error('Ошибка загрузки данных:', error);
    return <div>Ошибка загрузки данных</div>;
  }

  const isCurrentUser = Number(userIdFromUrl) === currentUserId;

  return (
    <>
      <Header currentNavElement="Профиль" />

      <ProfileWrapper>
        <ProfileHeader>
          <ProfileTitle>
            {userData.first_name} {userData.second_name}
          </ProfileTitle>
          {isCurrentUser && (
            <StyledButton onClick={handleEditClick}>Редактировать</StyledButton>
          )}
        </ProfileHeader>

        <ProfileMain>
          <ProfilePhoto>
            <UserPhoto photoSrc="/path/to/default/photo.jpg" photoAlt="Фото пользователя" />
          </ProfilePhoto>
          <ProfileInfo>
            <ProfileInfoItem>
              <div><strong>Местоположение:</strong> {userData.location}</div>
              <div><strong>Стоимость:</strong> {userData.price} руб/день</div>
              <div><strong>Телефон:</strong> {userData.phone_number}</div>
            </ProfileInfoItem>
            <ProfileAbout>
              <ProfileAboutTitle>Обо мне</ProfileAboutTitle>
              <ProfileAboutText>{userData.about_me}</ProfileAboutText>
            </ProfileAbout>
          </ProfileInfo>
        </ProfileMain>
      </ProfileWrapper>
      
      <Footer />

      {isModalOpen && (
        <ModalWindow
          userData={userData}
          onSave={handleModalSave}
          onCancel={handleModalCancel}
        />
      )}
    </>
  );
};

export default ProfileViewing;
