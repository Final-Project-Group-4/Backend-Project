import React, { useRef } from 'react';
import { useFormik } from 'formik';
import './_PlanTrip.scss';
import { planTripSchema } from './schema/PlanTripSchema';
import peter from './../../assets/peter1.png';
import emailjs from '@emailjs/browser';

export default function PlanTrip() {
  const form = useRef();

  //handleSubmit function for clearing the form after submit and sending the details through email
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  //Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o88vdfp', 'template_dw6d4qk', form.current, 'CU-Fpo2wtJ0EYhcL6').then(
      (response) => {
        console.log(response.text);
        console.log('message sent');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        contact: '',
        routeName: '',
        startDate: '',
        days: '',
        size: '',
        message: '',
      },
      validationSchema: planTripSchema,
      onSubmit,
    });
  // service_id = service_o88vdfp;
  //Public Key=CU-Fpo2wtJ0EYhcL6
  //Template_id=template_dw6d4qk
  return (
    <div>
      <div>
        <img
          src="https://carnelian-august-e33.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b5d58c1-b14f-4554-99cb-a617cb073928%2Fkilimanjaro-peak5.jpg?id=1aa18720-d005-4e8d-8abc-470da9783302&table=block&spaceId=74d07a78-32bb-4842-b661-ec4168abe5da&width=2000&userId=&cache=v2"
          alt="Plan Trip"
          width="100%"
          height="600px"
        />
      </div>
      <div className="planTrip">
        <form ref={form} onSubmit={handleSubmit} autoComplete="off" className="PlanTripForm">
          <p>
            Please add the size of your party, and the trip you are interested in as well as
            possible date. We offer you a custom trip based on your budget and personal preferences.
          </p>
          <label htmlFor="name">Please enter your name</label>
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="name"
            type="text"
            name="name"
            className={errors.name && touched.name ? 'input-error' : ''}
          />
          <label htmlFor="email">Please enter your email</label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            type="email"
            name="email"
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          <label htmlFor="contact">Please enter your contact number</label>
          <input
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            id="contact"
            type="phone"
            name="contact"
            className={errors.contact && touched.contact ? 'input-error' : ''}
          />
          <label htmlFor="routeName">Choose destination (the name of the desired route) </label>
          <input
            value={values.routeName}
            onChange={handleChange}
            onBlur={handleBlur}
            id="routeName"
            type="text"
            name="routeName"
            className={errors.routeName && touched.routeName ? 'input-error' : ''}
          />
          <label htmlFor="startDate">Beginning date</label>
          <input
            value={values.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            id="startDate"
            type="date"
            name="startDate"
            className={errors.startDate && touched.startDate ? 'input-error' : ''}
          />
          <label htmlFor="days">Length of the trip in days</label>
          <input
            value={values.days}
            onChange={handleChange}
            onBlur={handleBlur}
            id="days"
            type="number"
            name="days"
            className={errors.days && touched.days ? 'input-error' : ''}
          />
          <label htmlFor="size">How big is your party?</label>
          <input
            value={values.size}
            onChange={handleChange}
            onBlur={handleBlur}
            id="size"
            type="number"
            name="size"
            className={errors.size && touched.size ? 'input-error' : ''}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            className={errors.message && touched.message ? 'input-error' : ''}
          />
          <button disabled={isSubmitting} type="submit">
            Get a free quote
          </button>
        </form>
        <div className="peter">
          <img src={peter} alt="Peter" />
          <p>Name: Peter Mlay</p>
          <p>Call: +24656877893</p>
          <p>Email: peter.mlay@test.de</p>
        </div>
      </div>
    </div>
  );
}
