import React, { useState } from 'react';
import { Modal, StarIcon, SubmitButton, CloseButton } from './rating-modal-window.styled';

export const RatingWindow = ({ isOpen, onClose, onSubmit }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating > 0) {
      onSubmit(selectedRating);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <h2>Оценить догситтера</h2>
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
      <CloseButton onClick={onClose}>Закрыть</CloseButton>
    </Modal>
  );
};
