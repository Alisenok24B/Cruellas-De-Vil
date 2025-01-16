import styled from '@emotion/styled';


export const StyledUserCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  max-width: 75%;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const UserPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 35%;

  /* Добавляем стиль для контейнера имени и рейтинга */
  & > .user-name-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px; /* Отступ между именем и рейтингом */
    margin-top: 8px;
    white-space: nowrap; /* Гарантирует, что текст и звезда не будут переноситься */
  }
`;

export const UserName = styled.h2`
  font-size: 1.75rem;
  margin: 0;
  color: #333;
`;

export const UserRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.2rem;
  color: #96A467;
`;


export const UserPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #ddd;
  margin-bottom: 16px;
`;




export const UserInfoWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  position: relative;
`;

export const UserInfoItem = styled.div`
  font-size: 1rem;
  color: #555;
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

export const UserAbout = styled.div`
  font-size: 1rem;
  color: #333;
`;

export const UserAboutTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

export const UserAboutText = styled.p`
  margin: 0;
`;

export const ButtonContainer = styled.div`
  margin-top: auto; /* Прижимает кнопки вниз */
  display: flex;
  justify-content: flex-end; /* Выравнивание кнопок по правому краю */
  gap: 12px; /* Отступ между кнопками */
`;
