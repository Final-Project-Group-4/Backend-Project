import React from 'react';
import {  useParams } from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';
import tourdata from "../../datajson/tourdata.json"

export default function SingleTour() {
 
  const [singleTour, setSingleTour ]= useState("");
  const {singleTourName} = useParams(); //this is the id coming from the url
 

  //console.log("SINGLE TOUR", tourdata);
  console.log("Tourdata in single tour",tourdata);

  useEffect(() => {
    console.log("useEffect ID",singleTourName);
   // instead of props find you need to map through the json, so go import it
    const foundTour = tourdata.find((item) => item.name === singleTourName); //used "+" to convert in number
    console.log("Use effect singleTour", foundTour)
    setSingleTour(foundTour);
  }, [singleTourName, singleTour]);// this useeffet will rune very time there is a change in the singleTOur or ID, these are dependencies 



  return (
<div>
  <h1>Single Tour</h1>
</div>

  )

}
