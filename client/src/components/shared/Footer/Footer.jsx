import './_Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          <div className="col">
            <h4>ADDRESS</h4>
            <ul className="list-unstyled">
              <li>P.O. BOX 228</li>
              <li>Marangu Tanzania</li>
            </ul>
          </div>
          <div className="col">
            <h4>CONTACT</h4>
            <ul className="list-unstyled">
              <li>{t('peterName')} Peter Mlay</li>
              <li>telephone: +255766034379</li>
              <li>Email: mlaypeter019@gmail.com</li>
            </ul>
          </div>
          <div className="col">
            <Link to={'/faq'} className="faq">
              <h4>FAQ</h4>
              <ul className="list-unstyled">
                <li>{t('anyQuestions')}</li>
              </ul>
            </Link>
          </div>
        </div>
        <hr />
        <div className="last-row">
          <p className="col-sm">All rights reserved</p>
          <div className="social-icons">
            <div className="icons">
              <a
                href="https://www.facebook.com/profile.php?id=100069632993371"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="icons">
              <a href="https://instagram.com/mlay_tours?r=nametag" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
