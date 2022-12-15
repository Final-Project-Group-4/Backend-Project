import './MediaIcons.scss';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function MediaIcons() {
  return (
    <div className="app__navbar__right">
      <ul className="app__navbar__icons">
        <li className="app__flex p-text">
          <a href={`#`}>
            <FaFacebook size={20} />
          </a>
        </li>
        <li className="app__flex p-text">
          <a href={`#`}>
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>

      <ul className="app__navbar_langauge">
        <li className="app__flex p-text">
          <a href={`#`}>DE</a>
        </li>
        <li className="app__flex p-text">
          <a href={`#`}>|</a>
        </li>
        <li className="app__flex p-text">
          <a href={`#`}>FR</a>
        </li>
        <li className="app__flex p-text">
          <a href={`#`}>|</a>
        </li>
        <li className="app__flex p-text">
          <a href={`#`}>EN</a>
        </li>
      </ul>
    </div>
  );
}

export default MediaIcons;
