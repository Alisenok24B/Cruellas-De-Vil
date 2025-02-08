import React from "react";
import {
  StyledUserCard,
  UserPhotoWrapper,
  UserPhoto,
  UserName,
  UserRating,
  UserInfoWrapper,
  UserInfoItem,
  UserAbout,
  UserAboutTitle,
  UserAboutText,
  ButtonContainer,
} from "./user-card.styled";
import { StyledButton } from "../button/button.styled";
import { Button } from "antd";
import { EditTwoTone } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";
import userPhoto from "../../assets/img/user_photo.jpg";
import { useTranslation } from "react-i18next";
import { useAddInteractionMutation } from "../../store/api/apiSlice";

export const UserCard = ({
  userData,
  isEditable,
  onEdit,
  onRate,
  hasInteracted,
  currentUserId,
}) => {
  if (!userData) {
    return <div>Нет данных для отображения.</div>;
  }

  const { t } = useTranslation();
  const [addInteraction] = useAddInteractionMutation();

  const averageRating =
    userData.ratings && userData.ratings.length > 0
      ? (
          userData.ratings.reduce((sum, rating) => sum + rating, 0) /
          userData.ratings.length
        ).toFixed(2)
      : "0.00";

  const handleTelegramClick = async () => {
    const telegramLink = `https://t.me/${userData.tg}`;
    window.open(telegramLink, "_blank");

    try {
      await addInteraction({
        ownerId: currentUserId,
        dogsitterId: userData.id,
      }).unwrap();
      console.log("Взаимодействие успешно записано!");
    } catch (error) {
      console.error("Ошибка записи взаимодействия:", error);
    }
  };

  return (
    <StyledUserCard>
      <UserPhotoWrapper>
        <UserPhoto
          src={userPhoto}
          alt={`Фото ${userData.first_name} ${userData.second_name}`}
        />
        <div className="user-name-rating">
          <UserName>
            {userData.first_name} {userData.second_name}
          </UserName>
          <UserRating>
            <StarFilled />
            <span>{averageRating}</span>
          </UserRating>
        </div>
      </UserPhotoWrapper>

      <UserInfoWrapper>
        <UserInfoItem>
          <strong>{t("dsf.pages.profile.location")}</strong>{" "}
          <span>{userData.location}</span>
        </UserInfoItem>
        <UserInfoItem>
          <strong>{t("dsf.pages.profile.price")}</strong>{" "}
          <span>{userData.price} руб/день</span>
        </UserInfoItem>
        <UserInfoItem>
          <strong>{t("dsf.pages.profile.phone")}</strong>{" "}
          <span>{userData.phone_number}</span>
        </UserInfoItem>

        <UserAbout>
          <UserAboutTitle>{t("dsf.pages.profile.about_me")}</UserAboutTitle>
          <UserAboutText>{userData.about_me}</UserAboutText>
        </UserAbout>

        <ButtonContainer>
          {isEditable ? (
            <StyledButton onClick={onEdit}>
              {t("dsf.pages.profile.edit")}
            </StyledButton>
          ) : (
            <>
              <Button
                onClick={handleTelegramClick}
                type="dashed"
                icon={<EditTwoTone twoToneColor="#96A467" />}
                iconPosition="end"
              >
                Telegram
              </Button>
              <StyledButton onClick={onRate} style={{ marginLeft: "10px" }}>
                {t("dsf.pages.profile.rating")}
              </StyledButton>
            </>
          )}
        </ButtonContainer>
      </UserInfoWrapper>
    </StyledUserCard>
  );
};
