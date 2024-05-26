import React, { useState } from 'react';
import { StyledModalWindow, StyledModalContent, StyledModalButtons } from './modal-window.styled';
import { StyledButton } from '../button/button.styled';

const useValidatePhoneNumber = () => {
  const [phoneError, setPhoneError] = useState('');

  const validatePhoneNumber = async (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    if (!cleanedPhoneNumber.startsWith('8') || cleanedPhoneNumber.length !== 11) {
      setPhoneError('некорректный формат номера телефона');
      return false;
    }

    const formattedPhoneNumber = `+7${cleanedPhoneNumber.slice(1)}`;
    const url = `https://phonevalidation.abstractapi.com/v1/?api_key=28a753b0aead4cdc9b1324494c5b50d6&phone=${formattedPhoneNumber}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const isValid = data.valid && data.country.code === 'RU';

      if (!isValid) {
        setPhoneError('Введенный номер телефона недействителен');
      } else {
        setPhoneError('');
      }
      return isValid;
    } catch (error) {
      console.error('Error validating phone number:', error);
      setPhoneError('Ошибка при проверке номера телефона');
      return false;
    }
  };

  return { phoneError, validatePhoneNumber };
};


export const ModalWindow = ({ userData, onSave, onCancel }) => {
  const { phoneError, validatePhoneNumber } = useValidatePhoneNumber();
  const [formData, setFormData] = useState(userData);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    if (name === 'phone_number') {
      setIsPhoneEmpty(value.trim() === '');
      validatePhoneNumber(value);
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
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          placeholder="Имя"
        />
        <input
          type="text"
          name="second_name"
          value={formData.second_name}
          onChange={handleInputChange}
          placeholder="Фамилия"
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
            name="phone_number"
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
          name="about_me"
          value={formData.about}
          onChange={handleInputChange}
          placeholder="Информация обо мне"
        />
        <StyledModalButtons>
          <StyledButton onClick={handleSaveClick} disabled={phoneError !== ''}>Сохранить</StyledButton>
          <button onClick={onCancel}>Отмена</button>
        </StyledModalButtons>
      </StyledModalContent>
    </StyledModalWindow>
  );
};