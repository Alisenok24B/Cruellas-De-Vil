import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { HeaderElements } from '../components/header-elements/header-elements';
import { Container } from '../components/container';
import { logo, user_photo } from '../assets/img';
import { Contacts } from '../components/contacts';
import { Logo } from '../components/logo';
import { UserPhoto } from '../components/user-photo';
import { UserData } from '../components/user-data';
import { UserInfo } from '../components/user-info';
import { UserAbout } from '../components/user-about';
import { Header } from '../components/header';
import { ModalWindow } from '../components/modal-window';
import { URLs } from '../__data__/urls';
import usersData from '../../stubs/json/users.json';

import {
  ProfileWrapper,
  ProfileHeader,
  ProfileTitle,
  EditButton,
  ProfileMain,
  ProfilePhoto,
  ProfileInfo,
  ProfileInfoItem,
  ProfileAbout,
  ProfileAboutTitle,
  ProfileAboutText,
  ProfileFooter,
  ProfileLogo,
  ProfileContacts,
} from './profile.styled';

const ProfileViewing = () => {
    const [userData, setUserData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    
    const [ searchParams ] = useSearchParams();
    console.log('Message', searchParams);
    const user_id = searchParams.get('id'); // Получаем user_id из URL-параметра
    console.log('userId from URL', user_id);
  
    useEffect(() => {
      const userId = sessionStorage.getItem('id');
      console.log('userId from session:', userId);
  
      if (userId) {
        const user = usersData.find(user => user.id === parseInt(user_id));
        console.log('User data from JSON:', user);
  
        if (user) {
          setUserData(user);
        } else {
          console.error('User not found in JSON data');
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

  const isCurrentUser = user_id === sessionStorage.getItem('id'); // Проверяем, является ли текущий пользователь владельцем профиля
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header currentNavElement={"Профиль"}/>

      <ProfileWrapper>
        <ProfileHeader>
          <ProfileTitle>{userData.first_name} {userData.second_name}</ProfileTitle>
          {isCurrentUser && <EditButton onClick={handleEditClick}>Редактировать</EditButton>}
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
                phone={userData.phone_number.toString()}
              />
            </ProfileInfoItem>
            <ProfileAbout>
              <ProfileAboutTitle>Обо мне</ProfileAboutTitle>
              <ProfileAboutText>{userData.about_me}</ProfileAboutText>
            </ProfileAbout>
          </ProfileInfo>
        </ProfileMain>
      </ProfileWrapper>

      <ProfileFooter>
        <ProfileLogo>
          <Logo className="logo" src={logo} alt="Человек с собакой" title="DogSittersFinder — любовь и забота о вашей собаке"/>
        </ProfileLogo>
        <ProfileContacts>
          <Contacts className="contacts">+7 800 555-35-35</Contacts>
        </ProfileContacts>
      </ProfileFooter>

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