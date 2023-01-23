import React from 'react';
import './_AboutUs.scss';
import Contacts from '../../components/shared/Contact/Contacts';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();
  window.scrollTo(0, 0);
  return (
    <>
      <div className="container blocksPicText">
      
        <div className="about">
            <div className="img-section">
                <img
                  src="https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673440165/kilimanjaro-peak4_zwr71r.jpg"
                  alt="our team"
                />
              
           {/* 
                <img
                  src="https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673445026/peter-in-orange-bg-mountain_edulkj.jpg"
                  alt="Peter Mlay"
                /> */}
               
            </div>
            <div className="about-text">
              <h3>{t('ourTeam')}</h3>
              <p>{t('ourTeamText')}</p>
              <p>{t('ourTeamText2')}</p>
              <p>{t('ourTeamText3')}</p>
            </div>
          
        </div>

        <div className="blocksPicText-inside">
          <div className="about-text-down">
            <h3>{t('history')}</h3>
            <p className="para">{t('historyText')}</p>
            <p className="para">{t('historyText1')}</p>
            <p className="para">{t('historyText2')}</p>
            <p className="para">{t('historyText3')}</p>
          </div>
          
            <div className="img-section">
              <img
                src="https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673444904/native-man-kilimanjaro_aafmo3.jpg"
                alt="Yohani KinyalaLauwo"
              />
            </div>
          
        </div>
      </div>
      <Contacts />
    </>
  );
}
