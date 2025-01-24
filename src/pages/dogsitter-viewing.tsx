import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetDogsitterByIdQuery, useUpdateDogsitterRatingMutation } from '../store/api/apiSlice';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { UserCard } from '../components/user-card';
import { EditProfileWindow } from '../components/modal-window';
import { RatingWindow } from '../components/rating-modal-window';
import Lottie from 'lottie-react';

  
import { RootState } from '../store/store';

import {
  AnimationBackgroundLeft,
  AnimationBackgroundRight,
  ProfileWrapper,
} from './profile.styled';

const ProfileViewing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);


  const currentUserId = useSelector((state: RootState) => state.user.id);

  const [searchParams] = useSearchParams();
  const userIdFromUrl = searchParams.get('id');
  console.log('User ID from URL:', userIdFromUrl);

  const { data: userData, isLoading, error } = useGetDogsitterByIdQuery(Number(userIdFromUrl), {
    skip: !userIdFromUrl,
  });

  const handleEditClick = () => setIsModalOpen(true);
  const handleModalSave = (updatedUserData) => {
    console.log('Updated user data:', updatedUserData);
    setIsModalOpen(false);
  };
  const handleModalCancel = () => setIsModalOpen(false);
  const handleRatingClick = () => setIsRatingModalOpen(true);
  const handleRatingModalClose = () => setIsRatingModalOpen(false);


  if (isLoading) return <div>Загрузка...</div>;
  if (error || !userData) {
    console.error('Ошибка загрузки данных:', error);
    return <div>Ошибка загрузки данных</div>;
  }

  const isCurrentUser = Number(userIdFromUrl) === currentUserId;

  return (
    <>
      <Header currentNavElement="Профиль" />
      <AnimationBackgroundLeft>
          <Lottie animationData={require('src/assets/img/profile_background.json')} />
      </AnimationBackgroundLeft>
      <AnimationBackgroundRight>
          <Lottie animationData={require('src/assets/img/profile_background_2.json')} />
      </AnimationBackgroundRight>
      <ProfileWrapper>
        <UserCard 
          userData={userData} 
          isEditable={isCurrentUser} 
          onEdit={handleEditClick}
          onRate={handleRatingClick} 
        />
      </ProfileWrapper>
      {isModalOpen && (
        <EditProfileWindow
          userData={userData}
          onSave={handleModalSave}
          onCancel={handleModalCancel}
        />
      )}
      {isRatingModalOpen && (
        <RatingWindow
          isOpen={isRatingModalOpen}
          onClose={handleRatingModalClose}
          userId={userData.id}
        />
      )}
      <Footer />
    </>
  );
};

export default ProfileViewing;
