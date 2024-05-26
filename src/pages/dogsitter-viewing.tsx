import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { user_photo } from '../assets/img';
import { UserPhoto } from '../components/user-photo';
import { UserInfo } from '../components/user-info';
import { Header } from '../components/header';
import { ModalWindow } from '../components/modal-window';
import usersData from '../../stubs/json/users.json';
import { Footer } from '../components/footer';
import { StyledButton } from '../components/button/button.styled';

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
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [searchParams] = useSearchParams();
  console.log('Message', searchParams);
  const user_id = searchParams.get('id'); // Получаем user_id из URL-параметра
  console.log('userId from URL', user_id);
  
  useEffect(() => {
    const userId = sessionStorage.getItem('id'); // Получение id из сессии
    console.log('userId from session:', userId);
  
    const defaultUserId = '1';
    let userIdToFind = userId || defaultUserId;;
  
    if (user_id != 'null') {
      userIdToFind = user_id;
    }

    console.log('Итоговый айдишник', userIdToFind);
    if (userIdToFind) {
      const user = usersData.find(user => user.id === parseInt(userIdToFind));
      console.log('User data from JSON:', user);
  
      if (user) {
        setUserData(user);
      } else {
        setUserData(usersData.find(user => user.id === 1));
      }
    }
  }, [user_id]);
  
  const handleEditClick = () => {
    setIsModalOpen(true);
  };
  
  const handleModalSave = (updatedUserData) => {
    setUserData(updatedUserData);
    setIsModalOpen(false);
  };
  
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  
  const isCurrentUser = user_id === sessionStorage.getItem('id') || user_id === 'null'; // Проверяем, является ли текущий пользователь владельцем профиля
  
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header currentNavElement={"Профиль"}/>

      <ProfileWrapper>
        <ProfileHeader>
          <ProfileTitle>{userData.first_name} {userData.second_name}</ProfileTitle>
          {isCurrentUser && <StyledButton onClick={handleEditClick}>Редактировать</StyledButton>}
          {/* <EditButton onClick={handleEditClick}>Редактировать</EditButton> */}
        </ProfileHeader>

        <ProfileMain>
          <ProfilePhoto>
            <UserPhoto photoSrc={user_photo} photoAlt="Фото пользователя" />
          </ProfilePhoto>
          <ProfileInfo>
            <ProfileInfoItem>
              <UserInfo className="info"
                location={userData.location}
                price={`${userData.price} руб/день`}
                phone={userData.phone_number}
              />
            </ProfileInfoItem>
            <ProfileAbout>
              <ProfileAboutTitle>Обо мне</ProfileAboutTitle>
              <ProfileAboutText>{userData.about_me}</ProfileAboutText>
            </ProfileAbout>
          </ProfileInfo>
        </ProfileMain>
      </ProfileWrapper>
      <Footer/>

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