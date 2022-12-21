import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import img from './../../assets/tour-1-1.jpg';
import { Contacts } from '../../components/export';
import mapboxgl from 'mapbox-gl';
import './_SingleTour.scss';

export default function SingleTour() {
  const [tour, setTour] = useState('');
  const [days, setDays] = useState([]);
  const [info, setInfo] = useState('');
  const [locs, setLocs] = useState([]);

  const { id } = useParams();

  const displayMap = async () => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWRhbnVyayIsImEiOiJjbGFoYmd0eDcwNnUxM3VueXV2cGoyd3V0In0.WjdfQXZW6I4SykjLM6t8YA';

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/adanurk/clbtyl9tq007614n5oqgrbq46',
      scrollZoom: true,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locs.forEach((loc) => {
      // Create marker
      const el = document.createElement('div');
      el.className = 'marker';

      // Add marker
      new mapboxgl.Marker({
        element: el,
        anchor: 'bottom',
      })
        .setLngLat(loc?.coordinates)
        .addTo(map);

      //Add popup
      new mapboxgl.Popup({
        offset: 20,
      })
        .setLngLat(loc?.coordinates)
        .setHTML(`<p className:"map-day-info">Day ${loc?.day}: ${loc?.description}</p>`)
        .addTo(map);

      // Extend map bounds to include current location
      bounds.extend(loc?.coordinates);
    });

    map.fitBounds(bounds, {
      padding: {
        top: 120,
        bottom: 120,
        left: 100,
        right: 100,
      },
    });
  };

  const getSingleTour = async () => {
    const response = await axios.get(`http://localhost:4000/api/tours/${id}`);
    setTour(response.data);
    setDays(response.data.days);
    setLocs(response.data.locations);
  };

  useEffect(() => {
    if (id) {
      getSingleTour();
    }
  }, [id]);

  console.log('OUTSIDE', locs);

  useEffect(() => {
    if (locs.length >= 0) {
      displayMap();
    }
  }, [locs]);

  return (
    <>
      <div className="container single-tour">
        <h1>{tour.name}</h1>
        <div className="main-img-div">
          <img src="" alt="big-tour-img" />
        </div>
        <p className="main-description">{tour.description}</p>
        <div className="main-middle">
          <div className="days-list">
            {days.map((day, index) => {
              return (
                <li
                  key={day.number}
                  default={index === 0}
                  className="day-list-items"
                  onClick={() => {
                    setInfo(day);
                  }}
                >
                  Day {day.number}
                </li>
              );
            })}
          </div>
          {info && (
            <div className="day-details">
              <h3>{info && info.title}</h3>
              {info.elevation && <h5>Elevation: {info.elevation}</h5>}
              {info.altitudeGained && <h5>Altitude Gained: {info.altitudeGained}</h5>}
              {info.altitudeLost && <h5>Altitude Lost: {info.altitudeLost}</h5>}
              <p>{info.description}</p>
              {info.note && <h6>{info.note}</h6>}
            </div>
          )}
          <div className="day-img">
            <img src="" alt="tour-img" />
          </div>
        </div>
        <div className="map-container" id="map" style={{ height: '50vh' }}></div>
      </div>

      <Contacts />
    </>
  );
}
