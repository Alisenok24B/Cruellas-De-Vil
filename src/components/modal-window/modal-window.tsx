import React, { useState } from 'react';
import { StyledModalWindow, StyledModalContent, StyledModalButtons } from './modal-window.styled';

const validatePhoneNumber = (value) => {
  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(value)) {
    return "Введите корректный номер телефона.";
  }
  return "";
};

export const ModalWindow = ({ userData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(userData);
  const [phoneError, setPhoneError] = useState('');
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'phone') {
      const error = validatePhoneNumber(value);
      setPhoneError(error);
      setIsPhoneEmpty(value.trim() === '');
    }
  };

  const handleSaveClick = () => {
    if (phoneError === '') {
      onSave(formData);
    }
  };

  return (
    <StyledModalWindow>
      <StyledModalContent>
        <h2>Редактировать профиль</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Имя Фамилия"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Местоположение"
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Цена"
        />
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={isPhoneEmpty ? '11 цифр в формате 89*' : ''}
            style={{ width: '100%', paddingRight: '150px' }}
          />
          {phoneError && (
            <span style={{ color: 'red', position: 'absolute', top: '100%', left: 0 }}>
              {phoneError}
            </span>
          )}
        </div>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleInputChange}
          placeholder="Информация обо мне"
        />
        <StyledModalButtons>
          <button onClick={handleSaveClick} disabled={phoneError !== ''}>Сохранить</button>
          <button onClick={onCancel}>Отмена</button>
        </StyledModalButtons>
      </StyledModalContent>
    </StyledModalWindow>
  );
};