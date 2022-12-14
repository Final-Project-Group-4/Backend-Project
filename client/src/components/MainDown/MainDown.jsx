import './_MainDown.scss';
import React from 'react';
import axios from 'axios';
import YouTubeEmbed from './YouTubeEmbed.jsx';
import { Link } from 'react-router-dom';

function MainDown() {
  //Get the axios response when clicked on the type of the tour.
  //Get all the tours depending upon the type of the tour
  /* const handleHiking = async () => {
    const divText = document.getElementById('hiking');
    console.log(divText.innerText);
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/api/tours/?type=${divText.innerText}`
    );
    console.log(response.data);
  };
  const handleSafari = async () => {
    const divText = document.getElementById('safari');
    console.log(divText.innerText);
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/api/tours/?type=${divText.innerText}`
    );
    console.log(response.data);
  };
  const handleCoffee = async () => {
    const divText = document.getElementById('coffee');
    console.log(divText.innerText);
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/api/tours/?type=${divText.innerText}`
    );
    console.log(response.data);
  };
  const handleCustomTour = async () => {
    const divText = document.getElementById('customTour');
    console.log(divText.innerText);
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/api/tours/?type=${divText.innerText}`
    );
    console.log(response.data);
  };
 */
  return (
    <div className="container mainDown">
      <div className="tours">
        <div className="hiking col-12-s col-4-m col-2-l" id="hiking" /* onClick={handleHiking} */>
          <Link to="/tours/category/hiking" >Hiking</Link>
        </div>
        <div className="safari col-12-s col-4-m col-2-l" id="safari" /* onClick={handleSafari} */>
          <Link to="/tours/category/safari">Safari</Link>
        </div>
        <div className="coffee col-12-s col-4-m col-2-l" id="coffee" /* onClick={handleCoffee} */>
          <Link to="/tours/category/coffee">Coffee</Link>
        </div>
        <div className="custom col-12-s col-4-m col-2-l" id="customTour" /* onClick={handleCustomTour} */>
          <Link to="/plantrip">Custom Tour</Link>
        </div>
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
