import "./_MainDown.scss";

import ReactPlayer from "react-player";

function MainDown() {
  return (
    <div className="maindown">
      <h1>Hi Here!</h1>
      <div className="tours">
        <div className="hiking">Hiking</div>
        <div className="safari">Safari</div>
        <div className="coffee">Coffee</div>
        <div className="custom">Custom Tour</div>
      </div>

      <div className="videos">
        Videos about Kilimanjaro
        <ReactPlayer url="https://youtu.be/7MZoIN9I8oU" />
        {/* <ReactPlayer url="https://youtu.be/XRwrpXf5V6c" />
        <ReactPlayer url="https://youtu.be/TsnAxKIYvmQ" />
        <ReactPlayer url="https://youtu.be/h5sG-A7Sk-c" /> */}
      </div>
    </div>
  );
}
export default MainDown;
