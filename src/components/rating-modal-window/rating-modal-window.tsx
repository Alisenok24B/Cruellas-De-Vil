import React, { useState } from 'react';
import { Modal, StarIcon, SubmitButton, CloseButton } from './rating-modal-window.styled';
import { useTranslation } from 'react-i18next';

const RatingWindow = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating > 0) {
      onSubmit(selectedRating);
      setSelectedRating(0);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <h2>{t("dsf.pages.modal-rating.rate_dogsitter")}</h2>
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
        <SubmitButton onClick={handleSubmit}>{t("dsf.pages.modal-rating.rate")}</SubmitButton>
      )}
      <CloseButton onClick={onClose}>{t("dsf.pages.modal-rating.сlose")}</CloseButton>
    </Modal>
  );
};

export { RatingWindow };
