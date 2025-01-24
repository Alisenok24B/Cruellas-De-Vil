import React, { useState } from 'react';
import { Modal, StarIcon, SubmitButton } from './rating-modal-window.styled';
import { useUpdateDogsitterRatingMutation } from '../../store/api/apiSlice';

export const RatingWindow = ({ isOpen, onClose, userId }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [updateDogsitterRating] = useUpdateDogsitterRatingMutation();

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = async () => {
    if (selectedRating > 0) {
      try {
        await updateDogsitterRating({ id: userId, rating: selectedRating }).unwrap();
        alert('Спасибо за вашу оценку!');
      } catch (error) {
        console.error('Ошибка при отправке рейтинга:', error);
      }
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <h2>Оцените догситтера</h2>
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            isActive={index < selectedRating}
            onClick={() => handleStarClick(index + 1)}
          />
        ))}
      </div>
      {selectedRating > 0 && (
        <SubmitButton onClick={handleSubmit}>Поставить оценку</SubmitButton>
      )}
      <button className="close-button" onClick={onClose}>
        Закрыть
      </button>
    </Modal>
  );
};
