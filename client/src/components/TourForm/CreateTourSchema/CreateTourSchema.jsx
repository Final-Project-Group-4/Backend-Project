import * as yup from 'yup';

export const CreateTourSchema = yup.object().shape({
  name: yup.string().required('Required'),
  duration: yup.number().duration('Please enter a single number').required('Required'),
  difficulty: yup.string().difficulty('Please enter easy, medium or advanced').required('Required'),
  description: yup.string().description('Please enter a description').required('Required'),
  subNote: yup.string().subNote('Please enter a more detailed description').required('Required'),
  subtitle: yup.string(),
  imgCover: yup.string().imgCover('Please enter a valid image url').required('Required'),
  otherImages: yup.array().of(
    yup.object().shape({
      first: yup.string().required('Required'),
      second: yup.string().required('Required'),
      third: yup.string().required('Required'),
    })
  ),
  type: yup.string().type('Please enter a valid type').required('Required'),
  scenery: yup.string()
});

/* 
    name: yup.string().required('Required'),
    duration: yup.number().('Please enter a number').required('Required'),
    difficulty: yup.string().("Please enter easy, medium or advanced").required("Required"),
    description: yup.string().('Please enter a description').required('Required'),
    subNote: yup.string().('Please enter a more detailed description').required('Required'),
    subtitle: yup.string(),
    imgCover:yup.string().('Please enter a valid image url').required('Required'),
    type: yup.string().("Please enter a valid type").required("Required"),
    scenery: yup.string(),
    otherImages: [],
    locations: [
      {
        type: '',
        coordinates: [],
        description: '',
        day: '',
      },
    ],
    days: [
      {
        number: '',
        title: '',
        description: '',
        elevation: '',
        altitudeGained: '',
        altitudeLost: '',
        descentTo: '',
        note: '',
        hikingTime: '',
      },
    ], */
