
import React from 'react';
import { Contacts, Footer, Navbar} from '../../components/export';
import tourdata from "../../datajson/tourdata.json";
import {  Grid } from '@mui/material';
import TourCard from '../../components/shared/TourCard/TourCard';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

export default function Tours() {
  console.log("TOURCARDStorender", tourdata)
  const [tours, setTours] = React.useState(tourdata);
  const { type } = useParams();
  useEffect (() => {
  
    if ( type ) {
      const filteredTours = tourdata.filter( tour => tour.type === type );
      setTours( filteredTours );
      console.log("theFiltered",filteredTours);
    }
  })

  console.log("type", type);

    return (
      <div className="tours container">
        <Navbar />
        
        <Grid container 
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center" > 
     {tours.map((tour) => {      
      return (
        <Grid  Item xs={3} margin="0.7em"> 
          <TourCard days={tour.days} name={tour.name} tour={tour.name} subtitle={tour.subtitle} difficulty={tour.difficulty} scenery={tour.scenery} id={tour.id}/>
          </Grid>
        
      )
     })}
        </Grid>
      
        <Contacts />
        <Footer />
      </div>
    );
  };




/* 
  return (
    <div className="tours container">
      <Navbar />
      <Container> 
      <Grid container 
      spacing={4}
      direction="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center" > 
      <TourCards tourdata={tourdata}/>
      </Grid>
      </Container>
      <Contacts />
      <Footer />
    </div>
  ); */