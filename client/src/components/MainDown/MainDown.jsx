import "./_MainDown.scss";
import React from "react";
import YouTubeEmbed from "./YouTubeEmbed.jsx";

function MainDown() {
  return (
    <div className="container">
      <div className="tours">
        <div className="hiking col-12-s col-4-m col-2-l">Hiking</div>
        <div className="safari col-12-s col-4-m col-2-l">Safari</div>
        <div className="coffee col-12-s col-4-m col-2-l">Coffee</div>
        <div className="custom col-12-s col-4-m col-2-l">Custom Tour</div>
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
