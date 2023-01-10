import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import './_PlanTrip.scss';
import { planTripSchema } from './schema/PlanTripSchema';
import peter from './../../assets/peter1.png';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function PlanTrip() {
  const { t } = useTranslation();
  const form = useRef();
  const [message, setMessage] = useState(false);

  //handleSubmit function for clearing the form after submit and sending the details through email
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    sendEmail();
  };
  //Send Email
  const sendEmail = () => {
    console.log(form.current);
    emailjs.sendForm('service_vhsqlog', 'template_av8kbnq', form.current, 'qRUwiJCe6auC3a9U0').then(
      (response) => {
        console.log(response.text);
        setMessage(true);
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
      <div className="plan-trip-banner">
        <p>{t('readyForAdventure')}</p>
      </div>
      <div className="planTrip container">
        <div>
          <form ref={form} onSubmit={handleSubmit} autoComplete="off" className="PlanTripForm">
            <p>{t('readyForAdventureText')}</p>
            <label htmlFor="name">{t('nameLabel')}</label>
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              type="text"
              name="name"
              className={errors.name && touched.name ? 'input-error' : ''}
            />
            <label htmlFor="email">{t('emailLabel')}</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              type="email"
              name="email"
              className={errors.email && touched.email ? 'input-error' : ''}
            />
            <label htmlFor="contact">{t('contactLabel')}</label>
            <input
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
              id="contact"
              type="phone"
              name="contact"
              className={errors.contact && touched.contact ? 'input-error' : ''}
            />
            <label htmlFor="routeName">{t('destinationLabel')}</label>
            <input
              value={values.routeName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="routeName"
              type="text"
              name="routeName"
              className={errors.routeName && touched.routeName ? 'input-error' : ''}
            />
            <label htmlFor="startDate">{t('dateLabel')}</label>
            <input
              value={values.startDate}
              onChange={handleChange}
              onBlur={handleBlur}
              id="startDate"
              type="date"
              name="startDate"
              className={errors.startDate && touched.startDate ? 'input-error' : ''}
            />
            <label htmlFor="days">{t('durationLabel')}</label>
            <input
              value={values.days}
              onChange={handleChange}
              onBlur={handleBlur}
              id="days"
              type="number"
              name="days"
              className={errors.days && touched.days ? 'input-error' : ''}
            />
            <label htmlFor="size">{t('groupSizeLabel')}</label>
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
              // dont forget that
              placeholder={t('yourMessage')}
              onChange={handleChange}
              value={values.message}
              onBlur={handleBlur}
              className={errors.message && touched.message ? 'input-error' : ''}
            />
            <button disabled={isSubmitting} type="submit" className="plan-submit-btn">
              {t('freeQuoteLabel')}
            </button>
            {message && <p>{t('requestSentLabel')}</p>}
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
