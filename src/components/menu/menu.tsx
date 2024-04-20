import React from "react";
import { map } from '../../assets/img'
import { profile } from '../../assets/img'

export function Menu(props) {
    return (
        <ul className={`${props.className}`}>
            <li>
                <a href="#">
                    <img src={map} alt="Картинка в виде карты" />
                </a>
            </li>
            <li>
                <a href="#" id="profile" className="show-profile">
                    <img src={profile} alt="Картинка в виде человека" />
                </a>
            </li>
            <li>
                <a href="#">
                    Выход
                </a>
            </li>
        </ul>
    );
}