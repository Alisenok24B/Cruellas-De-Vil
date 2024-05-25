import styled from '@emotion/styled';

export const StyledModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  textarea {
    height: 120px;
    resize: vertical;
  }
`;

export const StyledModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  button {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:first-of-type {
    background-color: var(--green);
    color: white;

    &:hover {
      background-color: var(--green-hover);
    }
  }

  button:last-of-type {
    background-color: #eee;

    &:hover {
      background-color: #ddd;
    }
  }
`;