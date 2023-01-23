import './_Header.scss';
import { useTranslation } from 'react-i18next';
import image from '../../assets/safari_unsplash.jpg';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="main__div">
      
      <header className="main__header">
         <div className='overlay1'> 
        <h2>{t('welcomeTo')}</h2>
        <img className="logo2" src={require('../../assets/Mlay_versionWhite.png')} alt="logo"></img>

        <p className='ourGoal'>{t('ourGoal')}</p>
        <button className="btn-OurTours" onClick={() => navigate('/tours')}>
          {t('ourTours')}
        </button>
         </div> 
      </header>
      
    </div>
  );
}

export default Header;
