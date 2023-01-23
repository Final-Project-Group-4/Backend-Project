import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './_ResetPassword.scss';
import { toast } from 'react-toastify';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  //console.log(token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`/api/admin/resetPassword/${token}`, {
        password,
        passwordConfirm,
      });
      //console.log(res.data);
      if (res.data) {
        toast.success('Password reset');
        navigate('/login');
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <div className="container login">
      <div className="login-wrapper">
        <h1>Reset Password</h1>
        <section className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                required
                value={password}
                label="Password"
                type="password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                required
                value={passwordConfirm}
                label="Confirm Password"
                type="password"
                margin="normal"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="btn-primary btn-login">Reset</button>
            </div>
            {error && <p className="forgot-error">Something went wrong!</p>}
          </form>
        </section>
      </div>
    </div>
  );
}

export default ResetPassword;
