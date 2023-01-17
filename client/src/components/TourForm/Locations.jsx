import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from '../../hooks/useFormContext';

export default function Locations() {
  const { tour, handleChange, setTour } = useFormContext();
  
  const handleLocDescription = (e, location) => {
    console.log("what about you",e.target.value);
    console.log(e.target);
    console.log("the whole object",tour);
    console.log("location",location);
  
    setTour((prev) => {
      const copy = { ...prev};
      console.log(copy)
      const rightLocation = copy.locations.map((loc)=>{
        if(loc.day === location.day){
          loc.description = e.target.value;
        }
        return loc;// returns the updated value 
      });

      copy.locations = rightLocation;
      return copy
    })
 
  };


  return (
    <>
      {tour.locations.map((location, index) => {
        return (
          <>
            <p>day:{location.day}type:point</p>
            <div className="form-group">
              <TextField
                fullWidth
                required
                value={location.coordinates}
                name="coordinates"
                label="coordinates"
                type="coordinates"
                margin="normal"
                onChange={handleChange}
              />
            </div>
            <div key={index}>
              <TextField
                fullWidth
                required
                value={location.description}
                name="description"
                label="description"
                type="description"
                margin="normal"
                onChange={(e) => handleLocDescription(e, location)}
              />
            </div>
          </>
        );
      })}
    </>
  );
}
