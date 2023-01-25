import "./_TourCard.scss";
import { Paper, Typography, Button, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import {
  FaBinoculars,
  FaSearch,
  FaTrash,
  FaArrowRight,
  FaFeatherAlt,
  FaWalking,
} from "react-icons/fa";
import { borderRadius } from "@mui/system";
import { Card } from "@mui/material";
function TourCard(props) {
  const {
    type,
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

  const isDays = days.length > 0 ? true : false;
  //this is true when the days array has at least one day and false when it is empty

  return (
    <Card
      className="card"
      elevation={3}
      sx={{
        height: { height },
        textAlign: "center",
        justifyContent: "space-between",
        borderRadius: "16px",
      }}
    >
      <img src={mainImg} alt="mainImage" className="img" />
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2" className="nameOfRoute">
          {tour}
          {type === "safari" && (
            <span className="typeIcons orange">
              <FaBinoculars size={30} />
            </span>
          )}
          {type === "hiking" && (
            <span className="typeIcons brown">
              <FaWalking size={30} />
            </span>
          )}
          {type === "local" && (
            <span className="typeIcons green">
              <FaFeatherAlt size={30} />
            </span>
          )}
        </Typography>
      </Box>

      <Box paddingX={2}>
        <Typography
          component="h2"
          variant="subtitle1"
          className="CardBodyText"
          sx={{ fontFamily: "raleway", fontSize: "1rem", fontWeight: "400" }}
          textAlign="left"
        >
          <b className="subtitlesTop">{subtitle}</b>
          <span />
        </Typography>
      </Box>

      {!inAdmin && (
        <>
          <Box paddingX={2}>
            <Typography
              component="h2"
              variant="subtitle1"
              className="CardBodyText"
              textAlign="left"
            >
              {!isDays && (
                <b className="subtitles">
                  <WbSunnyIcon
                    sx={{ width: 20.5, position: "relative", top: "6px" }}
                  />{" "}
                  1 Day
                  <span />
                </b>
              )}

              {isDays && (
                <>
                  <b className="subtitles">
                    <WbSunnyIcon
                      sx={{ width: 20.5, position: "relative", top: "6px" }}
                    />
                    {days.length} Days /
                  </b>
                  <b className="subtitles">
                    <DarkModeIcon
                      sx={{ width: 20.5, position: "relative", top: "6px" }}
                    />
                    {days.length - 1} Nights
                  </b>
                  <span />
                </>
              )}
            </Typography>
          </Box>

          <Box paddingX={2}>
            <Typography
              component="h2"
              variant="subtitle1"
              className="CardBodyText"
              sx={{ fontFamily: "raleway", fontSize: "1", fontWeight: "400" }}
              textAlign="left"
            >
              <b className="subtitles">Difficulty</b>: <span />
              {difficulty}
            </Typography>
          </Box>

          <Box paddingX={2}>
            <Typography
              component="h2"
              variant="subtitle1"
              className="CardBodyText"
              sx={{ fontFamily: "raleway", fontSize: "1", fontWeight: "400" }}
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

          <Button className="btn-delete" onClick={handleDelete}>
            <FaTrash size={30} className="icon" />
          </Button>
        </Box>
      )}

      {!inAdmin && (
        <Box sx={{ alignContent: "center" }}>
          <Button className="visitBtn">
            <Link to={`/tours/${id}`} className="card-link">
              DETAILS
              <FaArrowRight
                size={30}
                style={{ marginLeft: "10px", position: "relative", top: "8px" }}
              />
            </Link>
          </Button>
        </Box>
      )}
    </Card>
  );
}

TourCard.defaultProps = {
  inAdmin: false,
  height: "600px",
};

export default TourCard;
