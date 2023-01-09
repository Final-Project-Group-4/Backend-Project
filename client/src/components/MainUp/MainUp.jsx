import { ValueCard, Peter } from '../export';
import './_MainUp.scss';
import { useTranslation } from 'react-i18next';
import { FaCoffee, FaBinoculars, FaCarSide } from 'react-icons/fa';
import mainUp from './../../assets/lp-img-mainup.jpg';
import { HiScissors } from 'react-icons/hi';

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
          title={t("CustomTrip")}
          text={t("CustomTripText")}
          icon={<HiScissors size={60} />}
        />
        <ValueCard
          title={t("localTrip")}
          text={t("localTripText")}
          icon={<FaCoffee size={60} />}
        />
        <ValueCard
          title={t("safariTrip")}
          text={t("safariTripText")}
          icon={<FaBinoculars size={60} />}
        />
        <ValueCard
          title={t("transportation")}
          text={t("transportationText")}
          icon={<FaCarSide size={60} />}
        />
        {/* {t('values', { returnObjects: true }).map((item, i) => (
          <ValueCard key={i} title={item.title} text={item.text} icon={item.icon} />
        ))} */}
      </div>

      <Peter />
    </div>
  );
}

export default MainUp;
