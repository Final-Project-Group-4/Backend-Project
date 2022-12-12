import React from 'react';
import './mainNav.scss';
function mainNav() {
  return (
    <ul className="app__navbar__links">
      {['Tours', 'Gallery', 'About Us', 'Plan Trip'].map((item) => (
        <li className="app__flex p-text" key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default mainNav;
