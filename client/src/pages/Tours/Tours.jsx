import React, { useEffect, useContext } from 'react';
import './_Tours.scss';
import { Contacts } from '../../components/export';
import TourContext from '../../context/TourContext';

export default function Tours() {
  const { loadToursData, tourData } = useContext(TourContext);

  //During the first load of the page, load all the tours data
  useEffect(() => {
    loadToursData();
  }, []);

  return (
    <div className="container">
      {tourData.length === 0 && (
        <h1 style={{ height: '300px', marginTop: '6rem' }}>No Tour Found!</h1>
      )}
      {tourData &&
        tourData.map((item, index) => {
          return (
            <div key={index} style={{ height: '100px', marginTop: '6rem' }}>
              {item.name}
            </div>
            //here we define the tour cards, how should it look like
            // card image, card title, card body, delete and
            //edit icons
            // <TourCard key={index} {...item} />
          );
        })}
      <Contacts />
    </div>
  );
}
