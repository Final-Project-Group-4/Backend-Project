import * as yup from 'yup';

export const planTripSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  contact: yup.number().required('Required'),
  routeName: yup.string(),
  startDate: yup.date().required('Required'),
  days: yup.number(),
  size: yup.number().required('Required'),
  message: yup.string(),
});
