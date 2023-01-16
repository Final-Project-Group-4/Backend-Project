import { Grid } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import TourCard from '../shared/TourCard/TourCard';
import EmptyCard from './EmptyCard/EmptyCard';
import './_ManageTours.scss';

function ManageTours() {
  const [tourData, setTourData] = useState([]);
  const { user } = useContext(Context);

  const loadToursData = async () => {
    const allTours = await axios.get(`http://localhost:4000/api/tours`);
    if (allTours.status === 200) {
      setTourData(allTours.data.data);
    } else {
      console.error('Something went wrong');
    }
  };

  //const handleEdit = () => {};

  const handleDelete = async (tourId) => {
    await axios.delete(`http://localhost:4000/api/tours/${tourId}`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    const allTours = await axios.get(`http://localhost:4000/api/tours`);
    if (allTours.status === 200) {
      setTourData(allTours.data.data);
    } else {
      console.error('Something went wrong');
    }
  };

  useEffect(() => {
    loadToursData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="manage-tours-container">
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className="manage-tours-wrapper"
      >
        <Grid item xs={10} sm={6} md={6} lg={4}>
          <EmptyCard />
        </Grid>
        {tourData.map((tour, index) => {
          return (
            <Grid item xs={10} sm={6} md={6} lg={4} key={(index, tour._id)}>
              <TourCard
                mainImg={tour.imgCover}
                days={tour.days}
                name={tour.name}
                tour={tour.name}
                subtitle={tour.subtitle}
                difficulty={tour.difficulty}
                scenery={tour.scenery}
                id={tour._id}
                inAdmin="true"
                height="450px"
                handleDelete={() => {
                  handleDelete(tour._id);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ManageTours;
