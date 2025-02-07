import React, { useState } from 'react';
import { useUpdateUserProfileMutation } from '../../store/api/apiSlice';
import { StyledModalWindow, StyledModalContent, StyledModalButtons } from './edit-profile-window.styled';
import { StyledButton } from '../button/button.styled';
import { useTranslation } from 'react-i18next';

export const EditProfileWindow = ({ userData, onSave, onCancel }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(userData);
  const [phoneError, setPhoneError] = useState('');
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    if (!cleanedPhoneNumber.startsWith('8') || cleanedPhoneNumber.length !== 11) {
      setPhoneError(t("dsf.pages.modal-edit.phone_error"));
      return false;
    }

    setPhoneError('');
    return true;
  };

    const [updateUserProfile] = useUpdateUserProfileMutation();
  
    const handleSaveClick = async () => {
      try {
        console.log('Данные для отправки:', formData);
        const response = await updateUserProfile({ id: userData.id, data: formData }).unwrap();
        console.log('Профиль обновлён:', response);
        onSave(response); // Передаём обновлённые данные в родительский компонент
      } catch (error) {
        console.error('Ошибка обновления профиля:', error);
      }
    };
  

  return (
    <StyledModalWindow>
      <StyledModalContent>
        <h2>{t("dsf.pages.modal-edit.title")}</h2>
        <div className="form-grid">
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            placeholder={t("dsf.pages.modal-edit.first_name")}
          />
          <input
            type="text"
            name="second_name"
            value={formData.second_name}
            onChange={handleInputChange}
            placeholder={t("dsf.pages.modal-edit.second_name")}
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder={t("dsf.pages.modal-edit.price")}
          />
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            onBlur={(e) => validatePhoneNumber(e.target.value)}
            placeholder={t("dsf.pages.modal-edit.phone_number")}
          />
        </div>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder={t("dsf.pages.modal-edit.location")}
        />
        <textarea
          name="about_me"
          value={formData.about_me}
          onChange={handleInputChange}
          placeholder={t("dsf.pages.modal-edit.about_me")}
        />
        <StyledModalButtons>
          <StyledButton onClick={handleSaveClick} disabled={!!phoneError}>
            {t("dsf.pages.modal-edit.save")}
          </StyledButton>
          <StyledButton onClick={onCancel} type="button">
            {t("dsf.pages.modal-edit.cancel")}
          </StyledButton>
        </StyledModalButtons>
      </StyledModalContent>

    </StyledModalWindow>
  );
};
