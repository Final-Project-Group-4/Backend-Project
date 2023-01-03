import { Contacts, TourCard } from '../../components/export';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
//import TourContext from '../../context/TourContext';
import React, { useEffect, useState } from 'react';
import './_Tours.scss';
import axios from 'axios';

export default function Tours() {
  const [tourData, setTourData] = useState([]);

  const { type } = useParams();

  //Get all the Tours data and check for the status
  const loadToursData = async () => {
    const allTours = await axios.get(`http://localhost:4000/api/tours`);
    if (allTours.status === 200) {
      setTourData(allTours.data.data);
    } else {
      console.error('Something went wrong');
    }
  };

  //Get the Tours data according to the type of the tour and check for the status
  const loadToursDataByType = async () => {
    const filteredToursByType = await axios.get(`http://localhost:4000/api/tours/category/${type}`);
    console.log(filteredToursByType.data);
    if (filteredToursByType.status === 200) {
      setTourData(filteredToursByType.data);
      //this if statement is to redirect to the tour page if there is only one tour of that type
      /*  if (filteredToursByType.data.length === 1) {
        console.log('its JUST ONE');
        window.location.href = `/tours/${filteredToursByType.data[0]._id}`;
      } */
    } else {
      console.error('Something went wrong');
    }
  };

  //During the first load of the page, load all the tours data or by type

  useEffect(() => {
    if (type) {
      loadToursDataByType();
      window.scrollTo(0, 0);
    } else {
      loadToursData();
      window.scrollTo(0, 0); // add this line to scroll to the top when you render your components
    }
  }, [type]);

  return (
    <div className="container1">
      <div className="container2">
        <div
          className={`leftSide ${type === 'hiking' ? 'img-hiking' : ''} ${
            type === 'safari' ? 'img-safari' : ''
          } ${type === 'coffee' ? 'img-coffee' : ''}`}
        >
          <div className="insideLeft">
            <div className="tourPara">
              {!type && (
                <div className="overlay moreOpaque">
                  <h2>OUR TOURS</h2>
                  <p className="conditionalText">
                    Select from one of the following Amazing Africa Hikes & Treks. Do you prefer
                    shorter walks or longer treks? Easy strolls or conquering the highest peaks?, or
                    perharps you would like to design a custom tour, I invite you to look at our
                    tailored options and decide from there
                  </p>
                </div>
              )}

              {type === 'hiking' && (
                <div className="overlay moreOpaque">
                  <h2>HIKING TOURS</h2>
                  <p className="conditionalText">
                    Select from one of the following Amazing Africa Hikes & Treks. Do you prefer
                    shorter walks or longer treks? Easy strolls or conquering the highest peaks?, or
                    perharps you would like to design a custom tour, I invite you to look at our
                    tailored options and decide from there
                  </p>
                </div>
              )}

              {type === 'safari' && (
                <div className="overlay">
                  <h2>SAFARI TOURS</h2>
                  <p className="conditionalText">
                    Let Africas wildlife and safari lifestyle show you what this magical continent
                    is about, once you go on your first Safari trip, you develop a deep longing to
                    return to this magical continent. Start now and have a look at our offer, enjoy
                    your next African Safari holiday alongside our experienced guides for an
                    unforgettable experience
                  </p>
                </div>
              )}

              {type === 'coffee' && (
                <div className="overlay moreOpaque2">
                  <h2>LOCAL TOURS</h2>
                  <p className="conditionalText">
                    Highlights include: Waterfalls - Make a splash in the mountain water of
                    Kilimanjaro and enjoy stunning views of the surrounding valleys. Chagga Museum -
                    The Chagga culture and history can be explored by visiting the museum. There are
                    several exhibitions including a reconstructed thatched Chagga house. Underground
                    Chagga Tunnels - These were used by the Chagga people to hide themselves from
                    the enemies during clan wars. Coffee and Banana Farms - Visit coffee farms and a
                    local home where you can enjoy local dishes and learn the traditional process of
                    preparing coffee from bean to cup. Local Chagga bars and drink the traditional
                    beer.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Container className="rightSide rightSideTours">
          <Grid
            className="gridRight"
            sx={{ position: 'relative', top: '80px', marginBottom: '80px', overflowY: 'scroll' }}
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {tourData.map((tour) => {
              return (
                <Grid item xs={12} sm={12} md={12} lg={5} margin="0.2em" key={tour._id}>
                  <TourCard
                    mainImg={tour.imgCover}
                    days={tour.days}
                    name={tour.name}
                    tour={tour.name}
                    subtitle={tour.subtitle}
                    difficulty={tour.difficulty}
                    scenery={tour.scenery}
                    id={tour._id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
      <Contacts />
    </div>
  );
}
