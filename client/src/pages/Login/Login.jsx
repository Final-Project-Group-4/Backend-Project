import { TextField } from '@mui/material';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import { toast } from 'react-toastify';
import axios from 'axios';
import './_Login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, dispatch, isLoading } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    console.log(email, password);

    try {
      //API call
      const res = await axios.post(`http://localhost:4000/api/admin/login`, {
        email: email,
        password: password,
      });
      console.log(res.data);
      if (res.data) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        localStorage.setItem('user', JSON.stringify(res.data.token));
        navigate('/');
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
      toast.error('Wrong Credentials');
    }
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
              <button className="btn-primary btn-login">Login</button>
            </div>
            <p>If you want to reset your password, please click here.</p>
          </form>
        </section>
      </div>
    </div>
  );
}
