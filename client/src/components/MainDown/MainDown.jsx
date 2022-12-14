import './_MainDown.scss';
import React from 'react';
import axios from 'axios';
import YouTubeEmbed from './YouTubeEmbed.jsx';
import { Link } from 'react-router-dom';

function MainDown() {
  return (
    <div className="container mainDown">
      <div className="tours">
        <Link to="/tours/category/hiking">
          <div className="hiking col-12-s col-4-m col-2-l" id="hiking">
            Hiking
          </div>
        </Link>

        <Link to="/tours/category/safari">
          <div className="safari col-12-s col-4-m col-2-l" id="safari">
            Safari
          </div>
        </Link>

        <Link to="/tours/category/coffee">
          <div className="coffee col-12-s col-4-m col-2-l" id="coffee">
            Coffee
          </div>
        </Link>

        <Link to="/plantrip">
          <div className="custom col-12-s col-4-m col-2-l" id="customTour">
            Custom Tour
          </div>
        </Link>
      </div>

      <div className="videos">
        <p className="videoTitle">WHY TRAVEL WITH US?</p>
        <div className="player">
          <YouTubeEmbed embedId="7MZoIN9I8oU" />
        </div>
      </div>
    </div>
  );
}
export default MainDown;
