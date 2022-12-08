import "./_Contacts.scss";
import ContactForm from "./ContactForm";

import { Grid } from "@mui/material";
import React from "react";

export default function Contacts() {
  return (
    <Grid
      className="mainGrid"
      container
      spacing={5}
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <ContactForm />
    </Grid>
  );
}
