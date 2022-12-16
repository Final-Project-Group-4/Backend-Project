import { Contacts, TourCard } from '../../components/export';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import TourContext from '../../context/TourContext';
import React, { useEffect, useContext } from 'react';
import "./_Tours.scss";



export default function Tours() {
  const { tourData } = useContext(TourContext);
  /* 
  by importing tourdata from the context, you can use it in the component
  without the need to pass it as a prop from the parent component
  also no need to call the load tours data function, 
  because it is already called in the parent component */

  const [tours, setTours] = React.useState(tourData);
  const { type } = useParams();

  useEffect(() => {
    if (type) {
      const filteredTours = tourData.filter((tour) => tour.type === type);
      setTours(filteredTours);
      console.log('theFiltered', filteredTours);
    }
  },[]);

  console.log('type', type);

  return (
  
  <div className='container1'>
    
      <Container   sx={{position:"relative", top:"120px", marginBottom:"8em", minHeight:"95vh"}} >
      {/* you have to put a position relative to the component, add padding bottom so that
      the footer will be at the bottom of the page , this tip needs to be applied to all the other pages,
    the ones that have a footer, for example the custom tour page, the about page, the contact page, etc. */}
    
          <Grid
          
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          {tours.map((tour) => {
            if(tour.type === "coffee") {
              console.log("coffee")
            }
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
        </Container>
        <Contacts/>
        
        
    
    
  </div>
  
  );
}
