import React from "react"

import { map } from '../../assets/img'
import { profile } from '../../assets/img'

import { StyledMenu } from "./menu.styled"
import { StyledMenuLi } from "./menu.styled"
import { StyledMenuProfile } from "./menu.styled"
import { StyledMenuShowProfile } from "./menu.styled"

export function Menu(props) {
    return (
        <StyledMenu>
            <StyledMenuLi>
                <a href="#">
                    <img src={map} alt="Картинка в виде карты" />
                </a>
            </StyledMenuLi>
            <StyledMenuLi>
                {props.className.includes("show-profile") ? (
                    <StyledMenuShowProfile href="#" id="profile">
                        <img src={profile} alt="Картинка в виде человека" />
                    </StyledMenuShowProfile>
                ) : (
                    <StyledMenuProfile href="#" id="profile">
                        <img src={profile} alt="Картинка в виде человека" />
                    </StyledMenuProfile>
                )}
            </StyledMenuLi>
            <StyledMenuLi>
                <a href="#">
                    Выход
                </a>
            </StyledMenuLi>
        </StyledMenu>
    );
}