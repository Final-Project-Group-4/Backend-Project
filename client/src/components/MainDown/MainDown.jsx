import './_MainDown.scss';
import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import YouTubeEmbed from './YouTubeEmbed.jsx';
import { Link } from 'react-router-dom';

function MainDown() {

  const {t} = useTranslation();
  return (
    <div className="container mainDown">
      <div className="tours">
        <Link to="/tours/category/hiking">
          <div className="hiking col-12-s col-4-m col-2-l" id="hiking">
            {t("Hiking")}
          </div>
        </Link>

        <Link to="/tours/category/safari">
          <div className="safari col-12-s col-4-m col-2-l" id="safari">
           {t("Safari")}
          </div>
        </Link>

        <Link to="/tours/category/coffee">
          <div className="coffee col-12-s col-4-m col-2-l" id="coffee">
            {t("Coffee")}
          </div>
        </Link>

        <Link to="/plantrip">
          <div className="custom col-12-s col-4-m col-2-l" id="customTour">
            {t("CustomTour")}
          </div>
        </Link>
      </div>

      <div className="videos">
        <p className="videoTitle">{t("WhyTravelWithUs")}</p>
        <div className="player">
          <YouTubeEmbed embedId="7MZoIN9I8oU" />
        </div>
      </div>
    </div>
  );
}
export default MainDown;
