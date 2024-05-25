import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  background: var(--white);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px var(--shadow-color);
  max-width: 800px;
  margin: 0 auto;
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
`;


export const ProfileMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

export const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileInfoItem = styled.div`
  margin-bottom: 10px;
`;

export const ProfileAbout = styled.div`
  margin-top: 20px;
`;

export const ProfileAboutTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProfileAboutText = styled.p`
  line-height: 1.5;
`;

export const EditButton = styled.button`
  background: var(--green);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: var(--green-hover);
  }
`;


export const ProfileFooter = styled.footer`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileContacts = styled.div`
  font-size: 16px;
`;