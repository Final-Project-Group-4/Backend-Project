import { TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/admin/forgotpassword`, {
        email,
      });
      toast.success('Reset link has been sent!');
    } catch (err) {
      setError(true);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="container login">
      <div className="login-wrapper">
        <h1>Forgot Password</h1>
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
            </div>
            <div className="form-group">
              <button className="btn-primary btn-login" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </form>
          {error && <p className="forgot-error">Something went wrong!</p>}
        </section>
      </div>
    </div>
  );
}

export default ForgotPassword;
