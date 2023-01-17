import React from 'react'
import { TextField } from '@mui/material';
import {useFormContext} from '../../hooks/useFormContext';

export default function CreateTour() {

  const { tour, handleChange, setTour } = useFormContext();
  
  const handleDuration = (e) => {
    
    setTour((prev) => {
      const copy = { ...prev };
      const durationTour = parseInt(e.target.value);
      console.log(copy);
      copy.locations = []
      for (let i = 0; i < durationTour; i++) {
        copy.locations.push({ type: "", coordinates: "", description: "", day: i+1 });
      }
      copy.duration= durationTour;
      return copy; 
    })
    
  }

  const content = (
    <div style={{width:"300px", color:"red"}}>
   
                <div className="form-group">
                  <TextField
                    fullWidth
                    required
                    value={tour.name}
                    name="name"
                    label="name"
                    type="name"
                    margin="normal"
                    onChange={handleChange}
                  />
                   </div> 
                   <div className="form-group">
                  <TextField
                    fullWidth
                    required
                    value={tour.duration}
                    name="duration"
                    label="duration"
                    type="duration"
                    margin="normal"
                    onChange={handleDuration}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    fullWidth
                    required
                    value={tour.difficulty}
                    name="difficulty"
                    label="Difficulty"
                    type="difficulty"
                    margin="normal"
                    onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={tour.description}
                    name="description"
                    label="Description"
                    type="description"
                    margin="normal"
                    onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={tour.subnote}
                    name="subnote"
                    label="Subnote"
                    type="subnote"
                    margin="normal"
                    onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={tour.subtitle}
                    name="subtitle"
                    label="Subtitle"
                    type="subtitle"
                    margin="normal"
                    onChange={handleChange}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={tour.imgcover}
                    name="imgcover"
                    label="imgcover"
                    type="imgcover"
                    margin="normal"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={tour.type}
                    name="type"
                    label="type"
                    type="type"
                    margin="normal"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={tour.scenery}
                    name="scenery"
                    label="scenery"
                    type="scenery"
                    margin="normal"
                    onChange={handleChange}
                  />
                </div>
                
                
                
              </div>
  )
  return content
}
