import React from 'react';
// import { HeaderElements } from '../components/header-elements/header-elements'
import { Container } from '../components/container'
import { logo, user_photo } from '../assets/img';
import { Contacts } from '../components/contacts';
import { Logo } from '../components/logo';
// import { UserPhoto } from '../components/user-photo';
import { UserData } from '../components/user-data';
import { UserInfo } from '../components/user-info';
import { UserAbout } from '../components/user-about';
import { Header } from '../components/header';

const ProfileView = () => {
    return (
        <>
        <Header currentNavElement={"Профиль"}/>

        <main id="main" className="main">
            <UserData className="name" name="Имя Фамилия" src={user_photo} alt="Фото пользователя"/>
            <UserInfo className="info"
                location="Советский район"
                price="1500 руб/день"
                phone="+79393967375"
            />
            <UserAbout title="Обо мне">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque nec eleifend nulla. Sed elementum sagittis lectus,
                non finibus nulla tristique et. Proin dignissim porta mauris,
                at posuere tellus malesuada in. Nulla facilisi. Mauris dapibus
                libero in velit aliquet, sed ullamcorper justo eleifend.
            </UserAbout>
        </main>

        <footer id="footer" className="footer">
        <Container className="container">
            <Logo className="logo" src={logo} alt="Человек с собакой" title="DogSittersFinder — любовь и забота о вашей собаке"/>
            <Contacts className="contacts">+7 800 555-35-35</Contacts>
        </Container>
    </footer>
    </>
    );
}

export default ProfileView;