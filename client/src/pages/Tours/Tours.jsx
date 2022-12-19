import { Contacts, TourCard } from '../../components/export';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
//import TourContext from '../../context/TourContext';
import React, { useEffect, useContext, useState } from 'react';
import './_Tours.scss';
import axios from 'axios';

export default function Tours() {
  //const { setTourData, loadToursData, tourData } = useContext(TourContext);
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
    //console.log(filteredToursByType.data);
    if (filteredToursByType.status === 200) {
      setTourData(filteredToursByType.data);
    } else {
      console.error('Something went wrong');
    }
  };

  //During the first load of the page, load all the tours data or by type

  useEffect(() => {
    if (type) {
      loadToursDataByType();
    } else {
      loadToursData();
    }
  }, [type]);

  return (
    <div className="container1">
      <Container
        sx={{ position: 'relative', top: '120px', marginBottom: '8em', minHeight: '95vh' }}
      >
        {tourData.map((tour) => {
          return (
            <Grid item xs={3} margin="0.7em">
              <TourCard
                days={tour.days}
                name={tour.name}
                tour={tour.name}
                subtitle={tour.subtitle}
                difficulty={tour.difficulty}
                scenery={tour.scenery}
                id={tour.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
      <Contacts />
    </div>
  );
}
