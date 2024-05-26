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
`;

export const ProfileMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: flex-start;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px;
`;

export const ProfileAbout = styled.div`
  margin-top: 0px;
  margin-left: 40px;
  max-height: 200px;
  overflow-y: auto;
`;

export const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ProfileInfoItem = styled.div`
  margin-bottom: 0px;
`;


export const ProfileAboutTitle = styled.h2`
  padding-right: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProfileAboutText = styled.p`
  line-height: 1.5;
  word-wrap: break-word;
`;
