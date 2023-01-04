import './_MainDown.scss';
import React from 'react';
import axios from 'axios';
import YouTubeEmbed from './YouTubeEmbed.jsx';
import { Link } from 'react-router-dom';

function MainDown() {


  return (
    <div className="container mainDown">
      <h3>Choose from our variety of tailored trips under the following categories</h3>
      <div className="tours">
        
        <Link to="/tours/category/hiking">
          <div className="hiking" id="hiking">
            <img src="https://media.istockphoto.com/id/1189969126/photo/group-of-hikers-walks-in-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=YlJOZLmELRF0HaEr1Xv4-Uae_VN4vnB8XnE99hGD3gQ=" alt="" />
            <p className='textCateg'>Hiking</p> 
          </div>
        </Link>

        <Link to="/tours/category/safari">
          <div className="safari" id="safari">
            <img src={require("../../assets/safari_tours3.jpg")} alt="" />
            <p className='textCateg'>Safari</p> 
        
          </div>
        </Link>

        <Link to="/tours/category/coffee">
          <div className="coffee" id="coffee">
            <img src="https://media.istockphoto.com/id/924702024/photo/ground-coffee-in-spoon-coffee-beans.jpg?s=612x612&w=0&k=20&c=dvNz-rl2D8B1DFGDFAHqmWKAOtyMJi9oy2IbOEMIkH0=" alt="" />
            <p className='textCateg'>Coffee</p> 
          </div>
        </Link>

        <Link to="/plantrip">
          <div className="custom" id="customTour">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mt._Kilimanjaro_12.2006.JPG/800px-Mt._Kilimanjaro_12.2006.JPG" alt="" />
           <p className='textCateg'>Custom Tour</p> 
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
