import { TextField } from '@mui/material';
import React from 'react';
import './_Login.scss';
import UserContext from '../../context/UserContext';

export default function Login() {
 
  const { UserData } = useContext(UserContext);  
/* 
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
  };
 */
  return (
    <div className="container login">
      <div className="login-wrapper">
        <h1>Please login</h1>
        <section className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                required
                value={email}
                label="Email"
                type="email"
                margin="normal"
                onChange={handleChange}
              />
              <TextField
                required
                value={password}
                label="Password"
                type="password"
                margin="normal"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn-primary btn-login" type="submit">Submit</button>
            </div>
            <p>If you want to reset your password, please click here.</p>
          </form>
        </section>
      </div>
    </div>
  );
}
const { UserData } = useContext(UserContext);  