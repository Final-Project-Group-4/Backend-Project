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
                src="https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019129/peter%27s%20website/kilimanjaro-peak4_kk3ucv.jpg"
                alt="our team"
              />
            </div>
            <div className="single-img">
              <img
                src="https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019107/peter%27s%20website/peter-in-orange-bg-mountain_ldmsot.jpg"
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
          <img
            src="https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019104/peter%27s%20website/native-man-kilimanjaro_vrtygy.jpg"
            alt="Yohani KinyalaLauwo"
          />
        </div>
      </div>
      <Contacts />
    </div>
  );
}
