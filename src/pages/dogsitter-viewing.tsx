import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetDogsitterByIdQuery, useUpdateDogsitterRatingMutation } from '../store/api/apiSlice';
import { useCheckInteractionQuery, useAddInteractionMutation } from '../store/api/apiSlice';
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

import { useTranslation } from 'react-i18next';

const ProfileViewing = () => {
  const { t } = useTranslation();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const [searchParams] = useSearchParams();
  const userIdFromUrl = searchParams.get('id');

  const { data: userData, isLoading, error, refetch } = useGetDogsitterByIdQuery(Number(userIdFromUrl), {
    skip: !userIdFromUrl,
  });

  const currentUserId = useSelector((state: RootState) => state.user.id);
  const isCurrentUser = Number(userIdFromUrl) === currentUserId;


  const [updateDogsitterRating] = useUpdateDogsitterRatingMutation();

  const handleEditClick = () => setIsEditModalOpen(true);
  const handleModalClose = () => setIsEditModalOpen(false);

  const handleRatingClick = () => setIsRatingModalOpen(true);
  const handleRatingModalClose = () => setIsRatingModalOpen(false);

  const { data: interactionData, isFetching, error: interactionError } = useCheckInteractionQuery(
    { ownerId: currentUserId, dogsitterId: Number(userIdFromUrl) },
    { skip: !currentUserId || !userIdFromUrl }
  );
  
  const handleRatingSubmit = async (rating: number) => {
    try {
      await updateDogsitterRating({ id: userData.id, rating }).unwrap();
      console.log(`Оценка ${rating} успешно отправлена`);
      refetch();
    } catch (error) {
      console.error('Ошибка при отправке оценки:', error);
    }
  };
  
  const hasInteracted = Boolean(interactionData?.exists);

  if (isLoading) return <div>Загрузка...</div>;
  if (error || !userData) {
    console.error('Ошибка загрузки данных:', error);
    return <div>{t("dsf.pages.profile.error_loading")}</div>;
  }

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
          hasInteracted={hasInteracted}
          currentUserId={currentUserId}
        />
      </ProfileWrapper>

      {isEditModalOpen && (
        <EditProfileWindow
          userData={userData}
          onSave={handleModalClose}
          onCancel={handleModalClose}
        />
      )}

      {isRatingModalOpen && (
        <RatingWindow
          isOpen={isRatingModalOpen}
          onClose={handleRatingModalClose}
          onSubmit={handleRatingSubmit}
        />
      )}

      <Footer />
    </>
  );
};

export default ProfileViewing;
