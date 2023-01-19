import { TextField } from '@mui/material';
import { useFormContext } from '../../hooks/useFormContext';

export default function Locations() {
  const { tour, setTour } = useFormContext();

  const handleLocDescription = (e, location) => {
    //console.log('TOUR OBJECT', tour);

    setTour((prev) => {
      const copy = { ...prev };
      const rightLocation = copy.locations.map((loc) => {
        if (loc.day === location.day) {
          loc.description = e.target.value;
        }
        return loc;
      });

      copy.locations = rightLocation;
      return copy;
    });
  };

  const handleCoordinates = (e, location) => {
    setTour((prev) => {
      const copy = { ...prev };
      const rightLocation = copy.locations.map((loc) => {
        if (loc.day === location.day) {
          if (e.target.name === 'longitute') {
            loc.coordinates[0] = e.target.value;
          } else if (e.target.name === 'latitute') {
            loc.coordinates[1] = e.target.value;
          }
        }
        return loc;
      });

      copy.locations = rightLocation;
      return copy;
    });
  };

  return (
    <>
      {tour.locations.map((location) => {
        return (
          <div key={location.day}>
            <p>Day: {location.day}</p>
            <div className="form-group">
              <TextField
                value={location.coordinates[0]}
                name="longitute"
                label="Longitute"
                type="number"
                margin="dense"
                onChange={(e) => handleCoordinates(e, location)}
              />
            </div>
            <div className="form-group">
              <TextField
                value={location.coordinates[1]}
                name="latitute"
                label="Latitute"
                type="number"
                margin="dense"
                onChange={(e) => handleCoordinates(e, location)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={location.description}
                name="description"
                label="description"
                margin="dense"
                onChange={(e) => handleLocDescription(e, location)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
