import "./_MainDown.scss";

import ReactPlayer from "react-player";

function MainDown() {
  return (
    <div className="container">
      <div className="tours">
        <div className="hiking">Hiking</div>
        <div className="safari">Safari</div>
        <div className="coffee">Coffee</div>
        <div className="custom">Custom Tour</div>
      </div>

      <div className="videos">
        <p>WHY TRAVEL WITH US?</p>
        <div className="player">
          <ReactPlayer url="https://youtu.be/7MZoIN9I8oU" />
        </div>
      </div>
    </div>
  );
}

export default MainDown;
