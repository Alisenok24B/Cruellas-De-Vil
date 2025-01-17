import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh; /* Минимальная высота равна высоте экрана */
  padding: 20px;
  box-sizing: border-box;
  z-index: 1; /* Располагаем контент поверх фона */
  position: relative; /* Чтобы z-index применялся */
`;

/* Анимация слева */
export const AnimationBackgroundLeft = styled.div`
  position: fixed; /* Фиксируем анимацию на заднем фоне */
  top: 10%; /* Располагаем немного ниже верхнего края */
  left: -10%; /* Сдвигаем за пределы экрана для акцента */
  width: 40vw; /* Задаем ширину */
  height: 80vh; /* Задаем высоту */
  z-index: -1; /* Располагаем ниже карточки */
  overflow: hidden; /* Скрываем выходящие элементы */

  & > div {
    position: absolute;
    width: 100%; /* Растягиваем анимацию по ширине контейнера */
    height: 100%; /* Растягиваем анимацию по высоте контейнера */
    pointer-events: none; /* Отключаем взаимодействие */
  }
`;

/* Анимация справа */
export const AnimationBackgroundRight = styled.div`
  position: fixed; /* Фиксируем анимацию на заднем фоне */
  top: 10%; /* Располагаем немного ниже верхнего края */
  right: -10%; /* Сдвигаем за пределы экрана для акцента */
  width: 40vw; /* Задаем ширину */
  height: 80vh; /* Задаем высоту */
  z-index: -1; /* Располагаем ниже карточки */
  overflow: hidden; /* Скрываем выходящие элементы */

  & > div {
    position: absolute;
    width: 100%; /* Растягиваем анимацию по ширине контейнера */
    height: 100%; /* Растягиваем анимацию по высоте контейнера */
    pointer-events: none; /* Отключаем взаимодействие */
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
