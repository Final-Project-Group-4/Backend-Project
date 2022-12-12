import "./_TourCard.scss";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";


function TourCard(props) {

const {Name, description} = props;


  return (
   
      <Grid  Item xs={3} margin="0.2em">
        <Paper  elevation={3}  textAlign="center">
          <img
            src={require("../../../assets/tour-1-1.jpg")}
            className="img"/>
          <Box paddingX={1}>
          <Typography component ="h2" variant="subtitle1" className="nameOfRoute">NAME{Name}</Typography>
          </Box>
          <Box paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center"
            }}>
             {/* the sx is used to style the component */}
          <Typography component ="h2" variant="subtitle1" className="mad"
          >Description:{description}</Typography>
            </Box>
         
        </Paper>
        </Grid>
      
      
      
    
  );
}

export default TourCard;
