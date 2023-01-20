import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import './_PlanTrip.scss';
import { planTripSchema } from './schema/PlanTripSchema';
import peter from './../../assets/peter1.png';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { TextField } from '@mui/material';
import { useEffect } from 'react';

export default function PlanTrip() {
  const { t } = useTranslation();
  const form = useRef();
  /* window.scrollTo(0, 0); */

  //handleSubmit function for clearing the form after submit and sending the details through email
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    sendEmail();
  };
  //Send Email
  const sendEmail = () => {
    emailjs.sendForm('service_vhsqlog', 'template_av8kbnq', form.current, 'qRUwiJCe6auC3a9U0').then(
      (response) => {
        toast.success(`${t('requestSentLabel')}`);
      },
      (error) => {
        toast.error(`${error.text}`);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="plan-trip-banner">
        <p>{t('readyForAdventure')}</p>
      </div>
      <div className="planTrip container">
        <div>
          <form ref={form} onSubmit={handleSubmit} autoComplete="off" className="PlanTripForm">
            <p>{t('readyForAdventureText')}</p>
            <TextField
              fullWidth
              required
              value={values.name}
              onBlur={handleBlur}
              name="name"
              id="name"
              label={t('nameLabel')}
              type="text"
              margin="dense"
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
            />
            <TextField
              fullWidth
              required
              value={values.email}
              onBlur={handleBlur}
              name="email"
              id="name"
              label={t('emailLabel')}
              type="email"
              margin="dense"
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
            />
            <TextField
              fullWidth
              required
              value={values.contact}
              onBlur={handleBlur}
              name="contact"
              id="contact"
              label={t('contactLabel')}
              type="phone"
              margin="dense"
              onChange={handleChange}
              error={touched.contact && Boolean(errors.contact)}
            />
            <TextField
              fullWidth
              required
              value={values.routeName}
              onBlur={handleBlur}
              name="routeName"
              id="routeName"
              label={t('destinationLabel')}
              type="text"
              margin="dense"
              onChange={handleChange}
              error={touched.routeName && Boolean(errors.routeName)}
            />
            <TextField
              fullWidth
              required
              value={values.startDate}
              onBlur={handleBlur}
              name="startDate"
              id="startDate"
              label={t('dateLabel')}
              type="date"
              margin="dense"
              onChange={handleChange}
              error={touched.startDate && Boolean(errors.startDate)}
            />
            <TextField
              className={errors.name && touched.name ? 'input-error' : ''}
              fullWidth
              required
              value={values.days}
              onBlur={handleBlur}
              name="days"
              id="days"
              label={t('durationLabel')}
              type="number"
              margin="dense"
              onChange={handleChange}
              error={touched.days && Boolean(errors.days)}
            />
            <TextField
              fullWidth
              required
              value={values.size}
              onBlur={handleBlur}
              name="size"
              id="size"
              label={t('groupSizeLabel')}
              type="number"
              margin="dense"
              onChange={handleChange}
              error={touched.size && Boolean(errors.size)}
            />
            <textarea
              name="message"
              id="message"
              placeholder={t('yourMessage')}
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              error={touched.message && Boolean(errors.message)}
            />
            <div className="flexForBtn">
              <button
                disabled={isSubmitting}
                type="submit"
                className="/* plan-submit-btn */ btn-secondary"
              >
                {t('freeQuoteLabel')}
              </button>
            </div>
          </form>
        </div>
        <div className="peter">
          <img src={peter} alt="Peter" />
          <p>
            <strong>{t('peterName')}</strong> Peter Mlay
          </p>
          <p>
            <strong>{t('call')}</strong> +24656877893
          </p>
          <p>
            <strong>Email:</strong> mlaypeter019@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
