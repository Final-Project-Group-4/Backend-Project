import React from 'react';
import { Link } from 'react-router-dom';
import './mainNav.scss';
function mainNav() {
  return (
    <ul className="app__navbar__links">
      <li className="app__flex p-text">
        <Link to={'/tours'}>Tours</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={'/gallery'}> Gallery </Link>
      </li>
      <li className="app__flex p-text">
        <Link to={'/about'}>About Us</Link>
      </li>
      <li className="app__flex p-text">
        <Link to={'/plantrip'}>Plan Trip</Link>
      </li>
    </ul>
  );
}

export default mainNav;
