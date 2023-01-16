import React from 'react'
import { useRef, useState, useEffect } from 'react';
import axios from "../../api/axios";
const createTourForm_URL= "http://localhost:3000/admin/manageTours/createTourForm"


export default function CreateTour() {
     const userRef = useRef(null);
     const [tourName, setTourName] = useState("");
     const [errMsg, setErrMsg] = useState("");
     const [success, setSuccess] = useState(false);
     
     const [tour, setTour]   = useState({
        tourName: "",
        duration: "",
        difficulty: "",
        description: "",
        subNote: "",
        subtitle: "",
        imgCover: "",
        type:"",
        scenery:"",
    }) 

        const handleSubmit = e => {
            e.preventDefault()
            console.log(JSON.stringify(tour)) }


            const handleChange = e => {
                const type = e.target.type
                const name = e.target.name
                const value = e.target.value
                setTour({...tour, [name]: value})

            }


  useEffect(() =>{
    userRef.current.focus()
  },[])


  useEffect (() => {
    setErrMsg("");
  },[tourName, duration, difficulty, description, subNote, subtitle, imgCover, type, scenery])


/* 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      //axios will throw error if necessary
      const response = await axios.post(createTourForm_URL,
        JSON.stringify({name, duration, difficulty, description, subNote, subtitle, imgCover, type, scenery}),
          {
            headers:{'Content-Type': 'application/json'},
            withCredentials: true
      
          }
        );
      console.log (JSON.stringify(response.data));
      //console.log (JSON.stringify(response));
     
      setTour({ name, duration, difficulty, description, subNote, subtitle, imgCover, type, scenery }) 
      //we are saving it in the global context if everything goes well.
      
      setEmail("");
      setPassword("");
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

  }; */


  return (
    <div>
        <section> <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p></section>
        {success ? ( 
        <section>
            <h1>tour was succesfully created!</h1>
            <br />
            <p>
              <a href="/admin"> go to admin page</a>
            </p>
          </section>
          
          ) : (<section>
            <h1>Please login</h1>
            <section className="form">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <TextField
                    required
                    ref={userRef}
                    value={tourName}
                    label="tourName"
                    type="tourName"
                    margin="normal"
                    onChange={(e) => setTourName(e.target.value)}
                  />
                  <TextField
                    required
                    value={password}
                    label="Password"
                    type="password"
                    margin="normal"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button className="btn-primary btn-login" type="submit">Submit</button>
                </div>
                <p>If you want to reset your password, please click here.</p>
              </form>
            </section>
            </section>



          )}</div>
  );
}
