import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  background: var(--white);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px var(--shadow-color);
  max-width: 800px;
  margin: 80px auto;
  min-height: calc(100vh - 200px);
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center; /* Центрируем текст имени */
  margin-top: 10px;
`;

export const ProfileMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Две колонки: фото + имя и остальные поля */
  gap: 20px;
  align-items: start;
`;

export const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Равные отступы между элементами информации */
`;

export const ProfileInfoItem = styled.div`
  line-height: 1.6;
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

export const ProfileAbout = styled.div`
  text-align: justify;
  font-size: 16px;
  line-height: 1.6;
`;

export const ProfileAboutTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProfileAboutText = styled.p`
  word-wrap: break-word;
  margin: 0;
`;

export const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start; /* Прижимаем кнопку к началу блока справа */
  margin-top: 20px;

  &:hover {
    background-color: var(--primary-color-dark);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: var(--disabled-color);
  }
`;
