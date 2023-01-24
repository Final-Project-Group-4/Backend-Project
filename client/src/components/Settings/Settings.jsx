import { TextField } from '@mui/material';
import './_Settings.scss';
import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const { user, dispatch } = useContext(Context);
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const navigate = useNavigate();

  // console.log(user);
  // console.log(user.email);

  const handleLogout = async () => {
    dispatch({ type: 'LOGOUT' });
    try {
      await axios.post(`/api/admin/logout`);
      //console.log(res.data);
      navigate('/login');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    if (email !== user.email) {
      return toast.error('Email is wrong, please enter your current email.');
    } else if (email === newEmail) {
      return toast.error('Emails are same!');
    }

    console.log(user);

    try {
      //make a patch request with user id
      const updateRes = await axios.patch(`/api/admin/${user.id}`, {
        email: newEmail,
      });
      //console.log(updateRes);
      toast.success('Email reset, please log in with your new email address.');
      setEmail('');
      setNewEmail('');
      handleLogout();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const submitPassword = async (e) => {
    e.preventDefault();
    // compare user password & entered password
    if (password !== passwordConfirm) {
      return toast.error('New password and confirm password must be same.');
    }

    try {
      //make a patch request with user id
      const updateRes = await axios.patch(`/api/admin/${user.id}/updatePassword`, {
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm,
      });
      //console.log(updateRes.data);
      toast.success('Password reset');
      setPassword('');
      setPasswordConfirm('');
      setPasswordCurrent('');
    } catch (err) {
      //console.log(err);
      toast.error(err.response.data.message);
      setPassword('');
      setPasswordConfirm('');
      setPasswordCurrent('');
    }
  };

  return (
    <div className="settings-div">
      <div className="settings-wrapper">
        <h3 className="settings-h">Change Email</h3>
        <form className="settings-form" onSubmit={submitEmail}>
          <div className="settings-form-group">
            <TextField
              required
              value={email}
              label="Email"
              type="email"
              margin="dense"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              value={newEmail}
              label="New Email"
              type="email"
              margin="dense"
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="settings-form-group settings-btn">
            <button className="btn-primary btn-login">Submit</button>
          </div>
        </form>
      </div>
      <div className="settings-wrapper">
        <h3 className="settings-h">Change Password</h3>
        <form className="settings-form" onSubmit={submitPassword}>
          <div className="settings-form-group">
            <TextField
              required
              value={passwordCurrent}
              label="Password"
              type="password"
              margin="dense"
              onChange={(e) => setPasswordCurrent(e.target.value)}
            />
            <TextField
              required
              value={password}
              label="New Password"
              type="password"
              margin="dense"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              required
              value={passwordConfirm}
              label="Confirm Password"
              type="password"
              margin="dense"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div className="settings-form-group">
            <button className="btn-primary btn-login">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
