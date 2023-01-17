import './_Contacts.scss';
import ContactForm from './ContactForm';
import { Grid, Card, CardContent } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//npm i @emailjs/browser

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vhsqlog', 'template_f71uyt5', form.current, 'qRUwiJCe6auC3a9U0').then(
      (result) => {
        console.log(result.text);
        console.log('message sent');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Card style={{ margin: '0 auto' }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
