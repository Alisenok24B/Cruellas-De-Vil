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
  z-index: 1000;
`;

export const StyledModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 700px; /* Увеличена ширина */
  max-width: 90%;
  max-height: 90%;
  border: 2px solid #ddd;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow-y: auto; /* Прокрутка для длинного содержимого */

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    color: #333;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
      box-sizing: border-box;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #96a467;
        outline: none;
        box-shadow: 0 0 4px rgba(150, 164, 103, 0.5);
      }
    }
  }

  textarea {
    width: 100%;
    margin-top: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    resize: vertical; /* Возможность растягивать вручную */
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #96a467;
      outline: none;
      box-shadow: 0 0 4px rgba(150, 164, 103, 0.5);
    }
  }

  input[name='location'] {
      margin-top: 20px;
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
      box-sizing: border-box;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #96a467;
        outline: none;
        box-shadow: 0 0 4px rgba(150, 164, 103, 0.5);
      }
`;

export const StyledModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  button:first-of-type {
    background-color: var(--green);
    color: white;
  }

  button:last-of-type {
    background-color: #eee;
    color: #333;

    &:hover {
      background-color: #ddd;
    }
  }
`;
