import { TextField } from '@mui/material';
import { useFormContext } from '../../hooks/useFormContext';

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
