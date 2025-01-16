import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetDogsitterByIdQuery } from '../store/api/apiSlice';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { UserCard } from '../components/user-card';
import { EditProfileWindow } from '../components/modal-window';
  
import { RootState } from '../store/store';

import {
  ProfileWrapper,
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
        <UserCard 
          userData={userData} 
          isEditable={isCurrentUser} 
          onEdit={handleEditClick} 
        />
      </ProfileWrapper>
      {isModalOpen && (
        <EditProfileWindow
          userData={userData}
          onSave={handleModalSave}
          onCancel={handleModalCancel}
        />
      )}
      <Footer />
    </>
  );
};

export default ProfileViewing;
