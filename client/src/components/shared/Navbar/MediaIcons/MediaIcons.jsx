import './MediaIcons.scss';
import { FaFacebook } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaPowerOff } from 'react-icons/fa';
import { useContext } from 'react';
import { Context } from '../../../../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function MediaIcons() {
  const [t, i18n] = useTranslation();
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch({ type: 'LOGOUT' });

    try {
      const res = await axios.post(`http://localhost:4000/api/admin/logout`);
      console.log(res.data);
      if (res.data) {
        toast.error('You logged out');
        navigate('/');
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="app__navbar__right">
      <ul className="app__navbar__icons">
        <li className="app__flex p-text">
          <a
            href={`https://www.facebook.com/profile.php?id=100069632993371`}
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook size={20} />
          </a>
        </li>
        <li className="app__flex p-text">
          <a href={`https://instagram.com/mlay_tours?r=nametag`} rel="noreferrer" target="_blank">
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>

      <ul className="app__navbar_langauge">
        <li className="app__flex p-text">
          <p
            className="a"
            onClick={() => {
              i18n.changeLanguage('de');
            }}
          >
            DE
          </p>
        </li>
        <li className="app__flex p-text">
          <p className="a">|</p>
        </li>
        <li className="app__flex p-text">
          <p
            className="a"
            onClick={() => {
              i18n.changeLanguage('fr');
            }}
          >
            FR
          </p>
        </li>
        <li className="app__flex p-text">
          <p className="a">|</p>
        </li>
        <li className="app__flex p-text">
          <p
            className="a"
            onClick={() => {
              i18n.changeLanguage('en');
            }}
          >
            EN
          </p>
        </li>
      </ul>

      {user && (
        <>
          <ul className="app__navbar_langauge">
            <li className="app__flex p-text">
              <Link to={'/admin'}>Admin</Link>
            </li>
          </ul>
          <ul className="app__navbar_langauge">
            <li className="app__flex p-text">
              <p className="a logout-icon" onClick={handleLogout}>
                <FaPowerOff size={25} />
              </p>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default MediaIcons;
