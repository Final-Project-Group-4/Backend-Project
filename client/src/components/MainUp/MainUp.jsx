import { ValueCard, Peter } from '../export';
import './_MainUp.scss';
import { useTranslation } from 'react-i18next';
//import { FaCoffee, FaBinoculars, FaCarSide } from 'react-icons/fa';
import mainUp from './../../assets/lp-img-mainup.jpg';
//import { HiScissors } from 'react-icons/hi';
import cut from './../../assets/icons8-cut-400.png';
import coffee from './../../assets/icons8-cafe-400.png';
import safari from './../../assets/icons8-elephant-400.png';
import allterrain from './../../assets/icons8-hill-all-terrain-vehicule-400.png';

function MainUp() {
  const { t } = useTranslation();

  return (
    <div className="container mainup">
      <div className="first">
        <div className="text">
          <h2>{t('whatWeOffer')}</h2>
          <p>{t('weOffer')}</p>
        </div>
        <img src={mainUp} alt="kilimanjaro" />
      </div>
      <div className="values-container">
        <ValueCard
          title={t('CustomTrip')}
          text={t('CustomTripText')}
          icon={<img src={cut} height={90} alt="custom-img" />}
        />
        <ValueCard
          title={t('localTrip')}
          text={t('localTripText')}
          icon={<img src={coffee} height={90} alt="coffee-img" />}
        />
        <ValueCard
          title={t('safariTrip')}
          text={t('safariTripText')}
          icon={<img src={safari} height={90} alt="safari-img" />}
        />
        <ValueCard
          title={t('transportation')}
          text={t('transportationText')}
          icon={<img src={allterrain} height={90} alt="car-img" />}
        />
      </div>

      <Peter />
    </div>
  );
}

export default MainUp;
