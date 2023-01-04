import './MediaIcons.scss';
import { FaFacebook } from 'react-icons/fa';
import {useTranslation} from "react-i18next"
import { FaInstagram } from 'react-icons/fa';
function MediaIcons() {
  const [t,i18n] = useTranslation()
  return (
    <div className="app__navbar__right">
      <ul className="app__navbar__icons">
        <li className="app__flex p-text">
          <a href={`https://www.facebook.com/profile.php?id=100069632993371`} target="_blank">
            <FaFacebook size={20} />
          </a>
        </li>
        <li className="app__flex p-text">
          <a href={`https://instagram.com/mlay_tours?r=nametag`} target="_blank">
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>

      <ul className="app__navbar_langauge">
        <li className="app__flex p-text">
          <a href={`#`} onClick={()=> {
            i18n.changeLanguage('de')
          }}>DE</a>
        </li>
        <li className="app__flex p-text">
          <a href={`#`}>|</a>
        </li>
        <li className="app__flex p-text">
     <a href={`#`} onClick={()=> {
            i18n.changeLanguage('fr')
          }}>FR</a>
        </li>
        <li className="app__flex p-text">
          <a href={`#`}>|</a>
        </li>
        <li className="app__flex p-text">
        <a href={`#`} onClick={()=> {
            i18n.changeLanguage('en')
          }}>EN</a>
        </li>
      </ul>
    </div>
  );
}

export default MediaIcons;
