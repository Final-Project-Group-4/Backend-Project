import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormContext } from '../../hooks/useFormContext';



export default function CreateTour() {
  const { tour, handleChange, setTour } = useFormContext();

  const handleDuration = (e) => {
    setTour((prev) => {
      const copy = { ...prev };
      const durationTour = e.target.value;
      //console.log(copy);
      copy.locations = [];
      copy.days = [];
      for (let i = 0; i < durationTour; i++) {
        copy.locations.push({
          type: 'Point',
          coordinates: [],
          description: '',
          day: i + 1,
        });
        copy.days.push({
          number: i + 1,
          title: '',
          description: '',
          elevation: '',
          altitudeLost: '',
          altitudeGained: '',
          descentTo: '',
          note: '',
          hikingTime: '',
        });
      }
      copy.duration = durationTour;
      return copy;
    });
  };

  const handleImages = (e) => {
    
    setTour((prev) => {
      const copy = { ...prev };

       copy.otherImages.push({first: '', second: '', third: ''}); 
      
    
          if (e.target.name === 'first') {
            copy.otherImages[0] = e.target.value;
          } else if (e.target.name === 'second') {
            copy.otherImages[1] = e.target.value;
          } else if (e.target.name === 'third') {
            copy.otherImages[2] = e.target.value;
          }
          return copy;
    });
  };

  const content = (
    <div className='content-container'>
      <div className="form-group">
        <TextField
          fullWidth
          required
          value={tour.name}
          name="name"
          label="Name"
          type="name"
          margin="dense"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <TextField
          fullWidth
          required
          value={tour.duration}
          name="duration"
          label="Duration"
          type="duration"
          margin="dense"
          onChange={handleDuration}
        />
      </div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Difficulty</InputLabel>
        <Select
          required
          value={tour.difficulty}
          type="difficulty"
          name="difficulty"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Difficulty"
          margin="dense"
          onChange={handleChange}
        >
          <MenuItem value={'easy'}>Easy</MenuItem>
          <MenuItem value={'medium'}>Medium</MenuItem>
          <MenuItem value={'difficult'}>Difficult</MenuItem>
        </Select>
      </FormControl>
      <div className="form-group">
        <TextField
          className="description-tag"
          fullWidth
          required
          value={tour.description}
          name="description"
          label="Description"
          type="description"
          margin="dense"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <TextField
          className="description-tag"
          fullWidth
          value={tour.subNote}
          name="subNote"
          label="Subnote"
          type="subnote"
          margin="dense"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <TextField
          className="description-tag"
          fullWidth
          value={tour.subtitle}
          name="subtitle"
          label="Subtitle"
          type="subtitle"
          margin="dense"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <TextField
          className="description-tag"
          fullWidth
          value={tour.imgCover}
          name="imgCover"
          label="Cover image"
          type="imgcover"
          margin="dense"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <TextField
          className="description-tag"
          fullWidth
          value={tour.otherImages[0]}
          name="first"
          label="First image"
          type="first"
          margin="dense"
          onChange={handleImages}
        />
      </div>
      <div className="form-group">
        <TextField
          className="description-tag"
          fullWidth
          value={tour.otherImages[1]}
          name="second"
          label="Second image"
          type="second"
          margin="dense"
          onChange={handleImages}
        />
      </div>
      <div className="form-group">
        <TextField
          className="description-tag"
          fullWidth
          value={tour.otherImages[2]}
          name="third"
          label="Third image"
          type="third"
          margin="dense"
          onChange={handleImages}
        />
      </div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          required
          value={tour.type}
          type="type"
          name="type"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Type"
          margin="dense"
          onChange={handleChange}
        >
          <MenuItem value={'coffee'}>Coffee</MenuItem>
          <MenuItem value={'safari'}>Safari</MenuItem>
          <MenuItem value={'hiking'}>Hiking</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Scenery</InputLabel>
        <Select
          required
          value={tour.scenery}
          type="scenery"
          name="scenery"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Scenery"
          margin="dense"
          onChange={handleChange}
        >
          <MenuItem value={'good'}>Good</MenuItem>
          <MenuItem value={'very good'}>Very good</MenuItem>
          <MenuItem value={'excellent'}>Excellent</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
  return content;
}
