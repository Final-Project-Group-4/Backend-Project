import { Button, Dialog, DialogActions, DialogTitle, Grid } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';
import TourCard from '../shared/TourCard/TourCard';
import EmptyCard from './EmptyCard/EmptyCard';
import './_ManageTours.scss';

function ManageTours() {
  const [tourData, setTourData] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useContext(Context);
  const [isConfirmed, setIsConfirmed] = useState(false);

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
    setOpen(true);
    if (isConfirmed) {
      await axios.delete(`http://localhost:4000/api/tours/${tourId}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      toast.success('Tour is deleted!');
      const allTours = await axios.get(`http://localhost:4000/api/tours`);
      if (allTours.status === 200) {
        setTourData(allTours.data.data);
      } else {
        console.error('Something went wrong');
      }
      setIsConfirmed(false);
    } else {
      return;
    }
  };

  const handleClose = (answer) => {
    if (answer === 'yes') {
      setIsConfirmed(true);
      setOpen(false);
    } else {
      setOpen(false);
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
        justifyContent="flex-start"
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete this tour?'}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose('no');
            }}
          >
            No
          </Button>
          <Button
            onClick={() => {
              handleClose('yes');
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ManageTours;
