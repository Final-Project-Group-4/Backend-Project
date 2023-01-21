import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: 'Create Tour',
    1: 'Locations',
    2: 'Days',
  };

  const [page, setPage] = useState(0);

  const [tour, setTour] = useState({
    name: '',
    duration: "",
    difficulty: '',
    description: '',
    subNote: '',
    subtitle: '',
    imgCover:
      'https://res.cloudinary.com/dkwpmwrlr/image/upload/v1673350629/mount-Meru2_nu33v5.jpg',
    type: 'hiking',
    scenery: '',
    otherImages: [],
    locations: [
      {
        type: '',
        coordinates:[],
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
    ],
  });

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    setTour((prevTour) => ({
      ...prevTour,
      [name]: value,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        tour,
        setTour,
        title,
        page,
        setPage,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
