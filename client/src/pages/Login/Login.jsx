import { TextField } from '@mui/material';
import { useState } from 'react';
import './_Login.scss';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

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
              <button className="btn-primary btn-login">Submit</button>
            </div>
            <p>If you want to reset your password, please click here.</p>
          </form>
        </section>
      </div>
    </div>
  );
}
