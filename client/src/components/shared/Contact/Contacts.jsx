import "./_Contacts.scss";
import ContactForm from "./ContactForm";
import { Grid, Card } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
//npm i @emailjs/browser

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grujl8z",
        "template_0fjd638",
        form.current,
        "VXiwbAKrVA2i6AQZj"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Card style={{ margin: "0 auto", padding: "0.5em 5em" }}>
      {/* by giving a maxWidth it will not get smaller than that. */}

      <cardContent>
        <form ref={form} onSubmit={sendEmail}>
          <Grid
            className="mainGrid"
            container //this Grid container class acts more or less like a flexbox
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <ContactForm />
          </Grid>
        </form>
      </cardContent>
    </Card>
  );
}
