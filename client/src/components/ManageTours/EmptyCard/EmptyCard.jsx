import { Box, Paper, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./_EmptyCard.scss";

function EmptyCard() {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "450px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box paddingX={1}></Box>
      <Box paddingX={1}>
        <Typography variant="h3" component="h3" className="empty-card-title">
          Add a new tour
        </Typography>
      </Box>
      <Box sx={{ alignContent: "center" }}>
        <Link to={`/admin/manageTours/form`} className="empty-tour-link">
          <FaPlus size={100} className="plus-sign" />
        </Link>
      </Box>
    </Paper>
  );
}

export default EmptyCard;
