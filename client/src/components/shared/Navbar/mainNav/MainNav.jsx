import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './mainNav.scss';
function MainNav() {
  const {t} = useTranslation();
  return (


    <ul className="app__navbar__links">
      <li className="app__flex p-text">
        <Link to={'/'}>{t("home")}</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={'/tours'}>Tours</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={'/gallery'}> Gallery </Link>
      </li>
      <li className="app__flex p-text">
        <Link to={'/about'}>{t("aboutUs")}</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={'/plantrip'}>Plan Trip</Link>
      </li>
    </ul>
  );
}

export default MainNav;
