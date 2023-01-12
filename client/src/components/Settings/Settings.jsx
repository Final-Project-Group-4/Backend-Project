import { TextField } from '@mui/material';
import './_Settings.scss';
import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';

function Settings() {
  const { user } = useContext(Context);
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // console.log(user);
  // console.log(user.email);

  const submitEmail = async (e) => {
    e.preventDefault();
    if (email !== user.email) {
      toast.error('Email is not true');
      return;
    }
    try {
      //make a patch request with user id
      const updateRes = await axios.patch(`http://localhost:4000/api/admin/${user.id}`, {
        email: newEmail,
      });
      if (updateRes.data) {
        toast.success('Email reset');
        //console.log(updateRes.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitPassword = async (e) => {
    e.preventDefault();
    try {
      //make a patch request with user id
      const updateRes = await axios.patch(
        `http://localhost:4000/api/admin/${user.id}/updatePassword`,
        {
          passwordCurrent: passwordCurrent,
          password: password,
          passwordConfirm: passwordConfirm,
        }
      );
      console.log(updateRes.data);
      if (updateRes.data) {
        toast.success('Password reset');
      }
    } catch (error) {
      console.log(error);
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
