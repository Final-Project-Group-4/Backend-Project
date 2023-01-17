import React from 'react'
import { useState, useEffect } from 'react';
//import axios from 'axios';
import { TextField } from '@mui/material';
//const createTourForm_URL= "http://localhost:4000/api/tours"

//http://localhost:4000/api/tours . I SHOULD USE THIS TO POST A REQUESTO TO THE BACKEND

///admin/manageTours/createTourform

export default function CreateTour() {
   
    // const errRef = useRef();
     const [tourName, setTourName] = useState("");
     //const [errMsg, setErrMsg] = useState("");
     //const [success, setSuccess] = useState(false);
     const [duration, setDuration] = useState("");
     const [difficulty, setDifficulty] = useState("");
     const [description, setDescription] = useState("");
     const [subnote, setSubnote] = useState("");
     const [subtitle, setSubtitle] = useState("");
     const [imgcover, setImgCover] = useState("");
     const [type, setType] = useState("");
     const [scenery, setScenery] = useState("");
     const [tour, setTour] = useState({"tourName": "", "duration": "", "difficulty": "", "description": "", "subNote": "", "subtitle": "", "imgCover": "", "type": "", "scenery": ""})
       

        const handleSubmit = e => {
            e.preventDefault()
            console.log(JSON.stringify(tourName)) }
 /*

            const handleChange = e => {
                const type = e.target.type
                const name = e.target.name
                const value = e.target.value
                setTour({...tour, [name]: value})

            } */
/* 

 

/* 
  useEffect (() => {
    setErrMsg("");
  },[tourName, duration, difficulty, description, subNote, subtitle, imgCover, type, scenery]) */

/* 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
    
      const response = await axios.post(createTourForm_URL,
        JSON.stringify({tourName, duration, difficulty, description, subNote, subtitle, imgCover, type, scenery}),
          {
            headers:{'Content-Type': 'application/json'},
            withCredentials: true
      
          }
        );
      console.log (JSON.stringify(response.data));
    
     
      setTour({ tourName, duration, difficulty, description, subNote, subtitle, imgCover, type, scenery }) 
      
      setSuccess(true);


    } catch(err) {
      if (!err?.response) {

        setErrMsg("No response from the server!");
        
      } else if (err.response?.status === 400){
        
        setErrMsg("Wrong username or password");
      
      } else if (err.response?.status === 401){
        
        setErrMsg("Missing username or password");
          
      } else {
        
        setErrMsg ("Login Failed")
      }
      errRef.current.focus();

    }

  };   */


  return (
    <div>
   {/*      <section> <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p></section> */}
        
          <section className='form-tours'>
            <h1>Create a New Tour</h1>
            <section className="form-wrapper">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <TextField
                    fullWidth
                    required
                    value={tourName}
                    label="tourName"
                    type="tourName"
                    margin="normal"
                    onChange={(e) => setTourName(e.target.value)}
                  />
                   </div> 
                   <div className="form-group">
                  <TextField
                    fullWidth
                    required
                    value={duration}
                    label="Duration"
                    type="duration"
                    margin="normal"
                    onChange={(e) => setDuration(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    fullWidth
                    required
                    value={difficulty}
                    label="Difficulty"
                    type="difficulty"
                    margin="normal"
                    onChange={(e) => setDifficulty(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={description}
                    label="Description"
                    type="description"
                    margin="normal"
                    onChange={(e) => setDescription(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={subnote}
                    label="Subnote"
                    type="subnote"
                    margin="normal"
                    onChange={(e) => setSubnote(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={subtitle}
                    label="Subtitle"
                    type="subtitle"
                    margin="normal"
                    onChange={(e) => setSubtitle(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={imgcover}
                    label="imgcover"
                    type="imgcover"
                    margin="normal"
                    onChange={(e) => setImgCover(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={type}
                    label="type"
                    type="type"
                    margin="normal"
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className='description-tag'
                    fullWidth
                    required
                    value={scenery}
                    label="scenery"
                    type="scenery"
                    margin="normal"
                    onChange={(e) => setScenery(e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <button className="btn-secondary btn-login" type="submit">Submit</button>
                </div>
                <p>If you want to reset your password, please click here.</p>
                
              </form>
              
            </section>
            </section>

            

          </div>
  );
}
