import React from "react";
import { URLs } from "../../__data__/urls";
import { StyledMenu, StyledMenuLi } from "./menu.styled";
import { Link } from "../link";
import { Svg } from "../svg-icon";
import { useSearchParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../language-switcher'

const svgPropsMap = {
  width: '55px',
  height: '55px',
  fill: 'none',
  viewBox: "0 0 55 55",
  paths: [{ d: "M20.8725 50.6275L4.58331 45.194V8.27979L20.3775 13.5506L36.4902 4.33583L50.4166 9.90687V46.9265L36.8431 41.4952L20.8748 50.6275H20.8725ZM9.16665 14.6483V41.8894L18.3333 44.9442V17.6917L9.16665 14.6483ZM32.0833 12.1275L22.9166 17.3708V44.1833L32.0833 38.94V12.1275ZM36.8431 9.40958L36.6666 9.515V36.4902L45.8333 40.1569V13.0075L36.8431 9.40958Z" }]
};

const svgPropsProfile = {
  width: '55px',
  height: '55px',
  fill: 'none',
  viewBox: "0 0 55 56",
  paths: [
    { d: "M16.0417 18.6667C16.0417 12.2233 21.1718 7 27.5001 7C33.8283 7 38.9584 12.2233 38.9584 18.6667C38.9584 25.11 33.8283 30.3333 27.5001 30.3333C21.1718 30.3333 16.0417 25.11 16.0417 18.6667ZM27.5001 25.6667C31.297 25.6667 34.3751 22.5327 34.3751 18.6667C34.3751 14.8007 31.297 11.6667 27.5001 11.6667C23.7031 11.6667 20.6251 14.8007 20.6251 18.6667C20.6251 22.5327 23.7031 25.6667 27.5001 25.6667Z" },
    { d: "M14.5365 38.134C11.0983 41.6347 9.16675 46.3826 9.16675 51.3333H13.7501C13.7501 47.6203 15.1987 44.0593 17.7774 41.4338C20.356 38.8083 23.8534 37.3333 27.5001 37.3333C31.1468 37.3333 34.6442 38.8083 37.2228 41.4338C39.8014 44.0593 41.2501 47.6203 41.2501 51.3333H45.8334C45.8334 46.3826 43.9019 41.6347 40.4637 38.134C37.0255 34.6333 32.3624 32.6667 27.5001 32.6667C22.6378 32.6667 17.9746 34.6333 14.5365 38.134Z" }
  ]
};



export function Menu({ currentNavElement }) {
  const id = useSelector((s: RootState) => s.user.id);
  console.log('id = ', id)
  const nav = {
    search: { title: "Карта", svg: <Svg {...svgPropsMap} />, href: URLs.ui.search },
    viewing: { title: "Профиль", svg: <Svg {...svgPropsProfile} />, href: `${URLs.ui.dogsitterViewing}?id=${id}` }, //URLs.ui.dogsitterViewing.getUrl(char.id)
    exit: { title: "Выход", href: URLs.baseUrl }
  };
  const userRole = useSelector((s: RootState) => s.user.role);
  const [ searchParams ] = useSearchParams();
  const urlUserId = searchParams.get('id'); // Получаем user_id из URL-параметра
  const { t } = useTranslation()
  return (
    <StyledMenu>
      <StyledMenuLi>
        <Link contrast={currentNavElement === nav.search.title} href={nav.search.href}>
          {nav.search.svg}
        </Link>
      </StyledMenuLi>
      {userRole === 'dogsitter' && (
        <StyledMenuLi>
          <Link contrast={(currentNavElement === nav.viewing.title) && (urlUserId === String(id))} href={nav.viewing.href}>
                {nav.viewing.svg}
          </Link>
        </StyledMenuLi>
      )}
      <StyledMenuLi>
        <Link exit contrast={currentNavElement === nav.exit.title} href={nav.exit.href}>
          {t('dsf.pages.header.exit')}
        </Link>
      </StyledMenuLi>
      <LanguageSwitcher />
    </StyledMenu>
  );
}