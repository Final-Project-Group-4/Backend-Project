import './_ContactForm.scss';
import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Typography, Grid, TextField } from '@mui/material';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const [value, setValue] = React.useState('');
  const {t} = useTranslation();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid item xs={12} sm={6} className="leftGridI" padding={3}>
        <Typography variant="h3">{t("ContactUs")}</Typography>
        <p>
          {t("needHelp")}
        </p>

        <div className="space"></div>

        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="FullName"
          name="FulName"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <div className="space" />
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Email"
          type="email"
          name="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} textAlign="end" padding={2}>
        <TextField
          fullWidth
          id="filled-multiline-flexible"
          label="Message"
          type="message"
          name="message"
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
          required
        />
        <div className="space"></div>
        <Button
          value="Send"
          type="submit"
          justify-content="flex-end"
          variant="contained"
          color="success"
        >
          {t("Submit")}
        </Button>
      </Grid>
    </>
  );
}

export default ContactForm;
