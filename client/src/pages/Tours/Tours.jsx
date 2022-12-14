import { Contacts, TourCard } from '../../components/export';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import TourContext from '../../context/TourContext';
import React, { useEffect, useContext } from 'react';

export default function Tours() {
  const { loadToursData, tourData } = useContext(TourContext);
  const [tours, setTours] = React.useState(tourData);
  const { type } = useParams();

  //During the first load of the page, load all the tours data
  useEffect(() => {
    loadToursData();
  }, []);

  useEffect(() => {
    if (type) {
      const filteredTours = tourData.filter((tour) => tour.type === type);
      setTours(filteredTours);
      console.log('theFiltered', filteredTours);
    }
  });

  console.log('type', type);

  return (
    <div className="tours container">
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {tours.map((tour) => {
          return (
            <Grid Item xs={3} margin="0.7em">
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

      <Contacts />
    </div>
  );
}
