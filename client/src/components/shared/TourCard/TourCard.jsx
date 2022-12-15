import './_TourCard.scss';
import { Paper, Typography, Button} from '@mui/material';
import Box from '@mui/material/Box';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
//import { useNavigate } from 'react';
import { Link } from 'react-router-dom';


function TourCard(props) {
  const { tour, difficulty, days, subtitle, scenery, name } = props;
  console.log('tour', props);

  //const navigate = useNavigate();

  return (
    <>
    <Paper elevation={3} textAlign="center">
      <img src={require('../../../assets/tour-1-1.jpg')} className="img" />
      <Box paddingX={1}>
        <Typography component="subtitle1" variant="h2" className="nameOfRoute">
          {tour}
        </Typography>
      </Box>
      <hr />

      <Box paddingX={2}>
        {/* the sx is used to style the component */}
        <Typography
          component="h2"
          variant="subtitle1"
          className="CardBodyText"
          sx={{ fontFamily: 'raleway', fontSize: '1rem', fontWeight: '400' }}
          textAlign="left"
        >
          <b className="subtitles">Description</b>: <span />
          {subtitle}
        </Typography>
      </Box>
      <hr />
      <Box paddingX={2}>
        {/* the sx is used to style the component */}
        <Typography
          component="h2"
          variant="subtitle1"
          className="CardBodyText"
          sx={{ fontFamily: 'raleway', fontSize: '1', fontWeight: '400' }}
          textAlign="left"
        >
          {days.length}{' '}
          <b className="subtitles">
            <WbSunnyIcon sx={{ width: 20.5, position: 'relative', top: '5px' }} /> Days /{' '}
          </b>
          <span />
          {days.length + 1}{' '}
          <b className="subtitles">
            <DarkModeIcon sx={{ width: 20.5, position: 'relative', top: '5px' }} /> Nights
          </b>
          <span />
        </Typography>
      </Box>
      <hr />
      <Box paddingX={2}>
        {/* the sx is used to style the component */}
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
      <hr />
      <Box paddingX={2}>
        {/* the sx is used to style the component */}
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
      <box SX={{ alignContent: 'flex-end', display: 'flex' }}>
        
       
        <Link to={`/tours/${name}`}> <Button> Go to tour
          </Button>

        </Link>
       
        {/*  value="Send"
          type="submit"
          variant="contained"
          color="success" */}
      
         
        
     
      </box>

    </Paper>
    
    </>
  );
}

export default TourCard;
