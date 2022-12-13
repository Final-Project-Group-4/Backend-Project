import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Contacts, Footer, Navbar, TourCard } from '../../components/export';

export default function Tours() {
  const [tourData, setTourData] = useState([]);

  //During the first load of the page, load all the tours data
  useEffect(() => {
    loadToursData();
  }, []);

  //Get all the Tours data and check for the status
  const loadToursData = async () => {
    const AllTours = await axios.get(`${process.env.REACT_APP_BE_URL}/api/tours`);
    console.log(AllTours.data);

    if (AllTours.status === 200) {
      setTourData(AllTours.data);
    } else {
      console.error('Something went wrong');
    }

    return (
      <div className="tours container">
        <Navbar />
        {tourData.length === 0 && <h1>No Tour Found!</h1>}
        {tourData &&
          tourData.map((item, index) => {
            return (
              //here we define the tour cards, how should it look like
              // card image, card title, card body, delete and
              //edit icons
              <TourCard key={index} {...item} />
            );
          })}
        <Contacts />
        <Footer />
      </div>
    );
  };
}
