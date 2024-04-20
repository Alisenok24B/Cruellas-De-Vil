import React from "react";
import { user_photo } from '../../assets/img'

function Preview({ userPhoto, fullName, cost, fullDesc }) {
  return (
    <li>
      <div className="photo">
        <img src={userPhoto} alt="Фото пользователя" />
      </div>
      <div className="desc">
        <p className="fullname">{fullName}</p>
        <p className="cost">
          Стоимость: <span className="cost-rh">{cost}</span>
        </p>
        <p className="fulldesc">{fullDesc}</p>
      </div>
    </li>
  );
}

export function PreviewsList() {
  const users = [
    {
      userPhoto: { user_photo },
      fullName: "1. Имя Фамилия",
      cost: "1500 руб/час",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ...",
    },
    {
      userPhoto: { user_photo },
      fullName: "2. Имя Фамилия",
      cost: "1500 руб/час",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ...",
    },
    // Остальные пользователи
  ];

  return (
    <ul className="previews">
      {users.map((user, index) => (
        <Preview
          key={index}
          userPhoto={user.userPhoto}
          fullName={user.fullName}
          cost={user.cost}
          fullDesc={user.fullDesc}
        />
      ))}
    </ul>
  );
}