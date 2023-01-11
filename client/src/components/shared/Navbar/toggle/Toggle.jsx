import './_toggle.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Toggle(props) {
  const [t,i18n] = useTranslation();

  return (
    <div className="app__navbar__menu">
       
      <HiMenuAlt4 onClick={() => props.setToggle(true)} />
      {props.toggle && (
        <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85 }}>
          {/* when the use toggle the function setToggle useState gonna be false so it can disappear */}
          <HiX onClick={() => props.setToggle(false)} />
          <ul className="try">
            {/* {['Home', 'Tours', 'Gallery', 'About Us', 'Plan Trip'].map((item) => (
              <li key={{ item }}> */}
                {/* I changed the '#' with '/' on the next line so it can get us to the right Page but still doesn't work properly */}
                {/* <a href={`/${item}`} onClick={() => props.setToggle(false)}>
                  {item}
                </a>
              </li>
            ))} */}

      <li>
        <Link to={'/'} onClick={() => props.setToggle(false)}>Home</Link>
      </li>
      <li>
        <Link to={'/tours'} onClick={() => props.setToggle(false)}>{t("tours")}</Link>
      </li>
      <li>
        <Link to={'/gallery'} onClick={() => props.setToggle(false)}> {t("gallery")} </Link>
      </li>
      <li>
        <Link to={'/about'} onClick={() => props.setToggle(false)}>{t("aboutUs")}</Link>
      </li>
      <li>
        <Link to={'/plantrip'} onClick={() => props.setToggle(false)}>{t("planTrip")}</Link>
      </li>
      <ul className="Language">
      <li className="app__flex p-text">
          <a href={`#`} onClick={()=> {
            i18n.changeLanguage('de')
            props.setToggle(false)
          }}>DE</a>
        </li>
        <li className="app__flex p-text">
         |
        </li>
        <li className="app__flex p-text">
     <a href={`#`} onClick={()=> {
            i18n.changeLanguage('fr')
            props.setToggle(false)
          }}>FR</a>
        </li>
        <li className="app__flex p-text">
        |
        </li>
        <li className="app__flex p-text">
        <a href={`#`} onClick={()=> {
            i18n.changeLanguage('en')
            props.setToggle(false)
          }}>EN</a>
        </li>
          </ul>
          </ul>
         
          <ul className="icon">
            <BsFacebook style={{ width: '20px', height: '20px' }} />,
            <FaInstagram style={{ width: '20px', height: '20px' }} />,
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Toggle;
