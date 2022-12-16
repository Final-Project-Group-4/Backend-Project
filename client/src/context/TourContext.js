
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// const TourContext = createContext();

// export const TourProvider = ({ children }) => {
//   const [tourData, setTourData] = useState([]);



 // useEffect(() => {

 // const loadToursData = async () => {
    const allTours = await axios.get(`http://localhost:4000/api/tours`);


   // setTourData(allTours.data.data);


  //};  loadToursData();
  
  //}, []);



  return (
    <TourContext.Provider value={{ tourData, setTourData }}>
      {children}
    </TourContext.Provider>
  );
};

//   //Get all the Tours data and check for the status
//   const loadToursData = async () => {
//     const allTours = await axios.get(`http://localhost:4000/api/tours`);

//     if (allTours.status === 200) {
//       setTourData(allTours.data.data);
//     } else {
//       console.error('Something went wrong');
//     }
//   };

//   return (
//     <TourContext.Provider value={{ tourData, loadToursData, setTourData }}>
//       {children}
//     </TourContext.Provider>
//   );
// };


// export default TourContext;
