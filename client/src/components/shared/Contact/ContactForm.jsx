import "./_ContactForm.scss";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Typography, Grid, TextField } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

function ContactForm() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid item xs={12} sm={6} className="leftGridI" padding={6}>
        <Typography>
          <h2>Contact Us</h2>
          <p>
            Need help starting out? Please contact Us, <br /> we are glad to
            help you plan your awesome trip!
          </p>
        </Typography>
        <div className="space"></div>

        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="FullName"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <div className="space" />
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid Item xs={12} sm={6} textAlign="end" padding={3}>
        <TextField
          fullWidth
          id="filled-multiline-flexible"
          label="Message"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InsertCommentIcon />
              </InputAdornment>
            ),
          }}
          multiline
          rows={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <div className="space"></div>
        <Button justify-content="flex-end" variant="contained" color="success">
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default ContactForm;
