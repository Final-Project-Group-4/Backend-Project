import React from 'react'
import { Grid } from '@mui/material'
import TourCard from './TourCard'


export default function TourCards({tourdata}) {
  console.log("TOURCARDS", tourdata)



  return (
    <Grid container 
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        
        >
      
     {tourdata.map((tour) => {      
      return (
        <div  key={tour._id}>          
          <TourCard tour={tour}/>
        </div>
      )
     })}

        </Grid>
      )
}
