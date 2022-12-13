
import "./_TourCard.scss";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function TourCard(props) {
  const { tour, description, difficulty, days} = props;
  console.log("days", days);

  return (
    <Paper elevation={3} textAlign="center">
      <img src={require("../../../assets/tour-1-1.jpg")} className="img" />
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
          sx={{ fontFamily: "raleway", fontSize: "1", fontWeight: "400" }}
          textAlign="left"
        >
          <b className="subtitles">Difficulty</b>:<span />
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
          sx={{ fontFamily: "raleway", fontSize: "1rem", fontWeight: "400" }}
          textAlign="left"
        >
          <b className="subtitles">Description</b>:<span />
          {description}
        </Typography>
      </Box>
      <hr />
      <Box paddingX={2}>
        {/* the sx is used to style the component */}
        <Typography
          component="h2"
          variant="subtitle1"
          className="CardBodyText"
          sx={{ fontFamily: "raleway", fontSize: "1", fontWeight: "400" }}
          textAlign="left"
        >
          <b className="subtitles">Days</b>:<span />
          {days.length}
        </Typography>
      </Box>
    </Paper>
  );
}

export default TourCard;
