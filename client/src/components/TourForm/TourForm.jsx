import React from 'react';

//import axios from 'axios';
//import FormInputs from './FormInputs';
import { useFormContext } from '../../hooks/useFormContext';

import FormInputs from './FormInputs';

//const createTourForm_URL= "http://localhost:4000/api/tours"

//http://localhost:4000/api/tours . I SHOULD USE THIS TO POST A REQUESTO TO THE BACKEND

///admin/manageTours/createTourform

export default function TourForm() {
  const { tour, title, page, setPage } = useFormContext();
  
  console.log("what are you", tour)

 const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(tour));
  };

  return (
   
      <form onSubmit={handleSubmit}>
        {/*      <section> <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p></section> */}
        
          <header>
            <h2>{title[page]}</h2>
            <div className="button-container">
              <button className='button' type="button" onClick={handlePrev}>Prev</button>

              <button className='button' type="button" onClick={handleNext}>Next</button>

              <button className="btn-secondary button" type="submit">
                Submit
              </button>
            </div>
          </header>
          
           <FormInputs /> 
        
           </form>
      
  );
}
