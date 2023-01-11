import React from 'react';
import './_AboutUs.scss';
import Contacts from '../../components/shared/Contact/Contacts';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const {t} = useTranslation();
  window.scrollTo(0, 0);
  return (
    <div className="container aboutus">
      <div className="about">
        <h2>{t("aboutUs")}</h2>
        <div className="main">
          <div className="img-section">
            <div className="single-img">
              <img
                src="https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673440165/kilimanjaro-peak4_zwr71r.jpg"
                alt="our team"
              />
            </div>
            <div className="single-img">
              <img
                src="https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673445026/peter-in-orange-bg-mountain_edulkj.jpg"
                alt="Peter Mlay"
              />
            </div>
          </div>

          <div className="about-text">
            <h3>{t("ourTeam")}</h3>
            <p>
              {t("ourTeamText")}
            </p>
          </div>
        </div>
      </div>

      <div className="main-history">
        <div className="about-text">
          <h3>{t("history")}</h3>
          <p>
          {t("historyText")}
          </p>
        </div>
        <div className="img-section">
          <div className="single-img">
            <img
            src="https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673444904/native-man-kilimanjaro_aafmo3.jpg"
            alt="Yohani KinyalaLauwo"
          />
          </div>
          
        </div>
      </div>
      <Contacts />
    </div>
  );
}
