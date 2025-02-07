import styled from '@emotion/styled';
import { StarFilled } from '@ant-design/icons';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .stars {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const StarIcon = styled(StarFilled)<{ isActive: boolean }>`
  font-size: 32px;
  margin: 0 5px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#96a467' : '#ccc')};
  transition: color 0.3s ease;

  &:hover {
    color: #96a467;
  }
`;

export const SubmitButton = styled.button`
  background: #96a467;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin-right: 10px;

  &:hover {
    background: #5a742e;
    transform: scale(1.05);
  }

  &:active {
    background: #4b5e27;
    transform: scale(0.98);
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #96a467;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #5a742e;
  }
`;
