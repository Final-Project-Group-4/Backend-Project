import { TextField } from '@mui/material';
import { useFormContext } from '../../hooks/useFormContext';
import uuid from 'react-uuid';

export default function Days() {
  const { tour, setTour } = useFormContext();
  //console.log('DAYS:', tour.days);

  const handleDays = (e, day) => {
    setTour((prev) => {
      const copy = { ...prev };
      const rightDays = copy.days.map((copyDay) => {
        if (copyDay.number === day.number) {
          switch (e.target.name) {
            case 'title':
              copyDay.title = e.target.value;
              break;
            case 'description':
              copyDay.description = e.target.value;
              break;
            case 'elevation':
              copyDay.elevation = e.target.value;
              break;
            case 'altitudeGained':
              copyDay.altitudeGained = e.target.value;
              break;
            case 'altitudeLost':
              copyDay.altitudeLost = e.target.value;
              break;
            case 'descentTo':
              copyDay.descentTo = e.target.value;
              break;
            case 'note':
              copyDay.note = e.target.value;
              break;
            case 'hikingTime':
              copyDay.hikingTime = e.target.value;
              break;
            default:
              break;
          }
        }
        return copyDay;
      });

      copy.days = rightDays;
      return copy;
    });
  };

  return (
    <>
      {tour.days.map((day) => {
        return (
          <div key={day.number}>
            <p>Day: {day.number}</p>
            <div className="form-group">
              <TextField
                required
                value={day.title}
                name="title"
                label="Title"
                type="title"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
            <div className="form-group">
              <TextField
                required
                value={day.description}
                name="description"
                label="Description"
                type="description"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={day.elevation}
                name="elevation"
                label="Elevation"
                type="elevation"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={day.altitudeGained}
                name="altitudeGained"
                label="Altitude Gained"
                type="altitudeGained"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={day.altitudeLost}
                name="altitudeLost"
                label="Altitude lost"
                type="altitudeLost"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={day.descentTo}
                name="descentTo"
                label="Descent to"
                type="descentTo"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={day.note}
                name="note"
                label="Note"
                type="note"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                value={day.hikingTime}
                name="hikingTime"
                label="Hiking Time"
                type="hikingTime"
                margin="dense"
                onChange={(e) => handleDays(e, day)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
