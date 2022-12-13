import React from 'react'
import { Grid } from '@mui/material'
import TourCard from './TourCard'


export default function TourCards({tourdata}) {
  console.log("TOURCARDS", tourdata)

  return (
   
     <>
     {tourdata.map((tour) => {      
      return (
        <Grid  Item xs={3} margin="0.7em"> 
          <TourCard days={tour.days} tour={tour.name} description={tour.description} difficulty={tour.difficulty}/>
          </Grid>
        
      )
     })}
    </>
     
      )
}
