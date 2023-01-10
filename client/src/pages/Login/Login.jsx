import { TextField } from '@mui/material';
import React from 'react';
import './_Login.scss';
import { AuthContext } from "../../context/AuthProvider";
import { useRef, useState, useEffect } from 'react';
import { useContext } from 'react';
import axios from "../../api/axios";
const LOGIN_URL= "http://localhost:4000/api/admin/login"

export default function Login() {

  const userRef = useRef();
  const errRef = useRef();
  const { setAuth } = useContext(AuthContext); 
  const [email, setEmail] = useState(""); 
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);


  useEffect(() =>{
    userRef.current.focus()
  },[])


  useEffect (() => {
    setErrMsg("");
  },[email,password])

 


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      //axios will throw error if necessary
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email, password}),
          {
            headers:{'Content-Type': 'application/json'},
            withCredentials: true
      
          }
        );
      console.log (JSON.stringify(response?.data));
      //console.log (JSON.stringify(response));
      const token = response?.data?.token;
      // this is called optional chaining when you put a question mark.
      //the access token is sent with the response because you set the withCredentials to true
      setAuth({ email, password, token }) 
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

  };

  return (
    <div className="container login">
      
        
      <div className="login-wrapper">
      <section> <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p></section>
        {success ? ( 
        <section>
            <h1>you are logged in!</h1>
            <br />
            <p>
              <a href="#"> go to home</a>
            </p>
          </section>
          
          ) : (

        <section>
        <h1>Please login</h1>
        <section className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                required
                ref={userRef}
                value={email}
                label="Email"
                type="email"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
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
        )}
     </div>
    </div>
  );
}
