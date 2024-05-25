import React from "react";
import user_photo from '../../assets/img/user_photo.jpg';
import { useEffect, useState } from "react";
import { StyledPreviewsList, StyledA, StyledPLDesc, StyledPLCostRH, StyledPLFullDesc, StyledPLFullNameCost, StyledPLLi, StyledPLPhoto, StyledPLPhotoImg} from "./previews-list.styled";

import { URLs } from "../../__data__/urls";

function Preview({ userIndex, userPhoto, fullName, cost, fullDesc, userId }) {
  return (
    <StyledA href={`${URLs.ui.dogsitterViewing}?id=${userId}`}>
      <StyledPLLi>
        <StyledPLPhoto>
          <StyledPLPhotoImg src={userPhoto} alt="Фото пользователя"/>
        </StyledPLPhoto>
        <StyledPLDesc>
          <StyledPLFullNameCost>{userIndex}. {fullName}</StyledPLFullNameCost>
          <StyledPLFullNameCost>
            Стоимость: <StyledPLCostRH>{cost}</StyledPLCostRH> руб/час
          </StyledPLFullNameCost>
          <StyledPLFullDesc>{fullDesc}</StyledPLFullDesc>
        </StyledPLDesc>
      </StyledPLLi>
    </StyledA>
  );
}

export function PreviewsList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${URLs.api.main}/users`);
        const userData = await response.json();
        const filteredUsers = userData.filter(user => user.role === 'dogsitter');
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users data: ', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <StyledPreviewsList>
      {users.map((user, index) => (
        <Preview
          key={index}
          userIndex={index + 1}
          userPhoto={user_photo}
          fullName={`${user.first_name} ${user.second_name}`}
          cost={user.price}
          fullDesc={user.about_me}
          userId={user.id}
        />
      ))}
    </StyledPreviewsList>
  );
}