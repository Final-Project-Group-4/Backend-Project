import './_TourCard.scss';
import { Paper, Typography, Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
import { FaPen, FaSearch, FaTrash } from 'react-icons/fa';

function TourCard(props) {
  const {
    tour,
    difficulty,
    days,
    subtitle,
    scenery,
    id,
    mainImg,
    inAdmin,
    handleDelete,
    handleEdit,
    height,
  } = props;

  return (
    <Paper
      elevation={3}
      sx={{ height: { height }, textAlign: 'center', justifyContent: 'space-between' }}
    >
      <img src={mainImg} alt="mainImage" className="img" />
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2" className="nameOfRoute">
          {tour}
        </Typography>
      </Box>
      <Divider component="li" className="li-divider" />
      <Box paddingX={2}>
        <Typography
          component="h2"
          variant="subtitle1"
          className="CardBodyText"
          sx={{ fontFamily: 'raleway', fontSize: '1rem', fontWeight: '400' }}
          textAlign="left"
        >
          <b className="subtitles"></b>
          <span />
          {subtitle}
        </Typography>
      </Box>
      <Divider component="li" className="li-divider" />
      {!inAdmin && (
        <>
          <Box paddingX={2}>
            <Typography
              component="h2"
              variant="subtitle1"
              className="CardBodyText"
              sx={{ fontFamily: 'raleway', fontSize: '1', fontWeight: '400' }}
              textAlign="left"
            >
              {days.length}
              <b className="subtitles">
                <WbSunnyIcon sx={{ width: 20.5, position: 'relative', top: '5px' }} /> Days /{' '}
              </b>
              <span />
              {days.length + 1}
              <b className="subtitles">
                <DarkModeIcon sx={{ width: 20.5, position: 'relative', top: '5px' }} /> Nights
              </b>
              <span />
            </Typography>
          </Box>
          <Divider component="li" className="li-divider" />

          <Box paddingX={2}>
            <Typography
              component="h2"
              variant="subtitle1"
              className="CardBodyText"
              sx={{ fontFamily: 'raleway', fontSize: '1', fontWeight: '400' }}
              textAlign="left"
            >
              <b className="subtitles">Difficulty</b>: <span />
              {difficulty}
            </Typography>
          </Box>
          <Divider component="li" className="li-divider" />
          <Box paddingX={2}>
            <Typography
              component="h2"
              variant="subtitle1"
              className="CardBodyText"
              sx={{ fontFamily: 'raleway', fontSize: '1', fontWeight: '400' }}
              textAlign="left"
            >
              <b className="subtitles">Scenery</b>: <span />
              {scenery}
            </Typography>
          </Box>
        </>
      )}
      {inAdmin && (
        <Box className="btn-group">
          <Button className="btn-details">
            <Link to={`/tours/${id}`} className="details-link">
              <FaSearch size={30} />
            </Link>
          </Button>
          {/* <Button className="btn-edit" onClick={handleEdit}>
            <FaPen size={30} />
          </Button> */}
          <Button className="btn-delete" onClick={handleDelete}>
            <FaTrash size={30} />
          </Button>
        </Box>
      )}

      {!inAdmin && (
        <Box sx={{ alignContent: 'center' }}>
          <Button className="btn-primary">
            <Link to={`/tours/${id}`} className="card-link">
              Go to tour
            </Link>
          </Button>
        </Box>
      )}
    </Paper>
  );
}

TourCard.defaultProps = {
  inAdmin: false,
  height: '600px',
};

export default TourCard;
