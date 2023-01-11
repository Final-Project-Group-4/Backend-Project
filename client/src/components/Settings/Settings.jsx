import { TextField } from '@mui/material';
import './_Settings.scss';

function Settings() {
  let email, password, newPassword, newEmail, confirmPassword;
  return (
    <div className="settings-div">
      <div className="settings-wrapper">
        <h3 className="settings-h">Change Email</h3>
        <form className="settings-form">
          <div className="settings-form-group">
            <TextField required value={email} label="Email" type="email" margin="dense" />
            <TextField required value={newEmail} label="New Email" type="email" margin="dense" />
          </div>
          <div className="settings-form-group settings-btn">
            <button className="btn-primary btn-login">Submit</button>
          </div>
        </form>
      </div>
      <div className="settings-wrapper">
        <h3 className="settings-h">Change Password</h3>
        <form className="settings-form">
          <div className="settings-form-group">
            <TextField required value={password} label="Password" type="password" margin="dense" />
            <TextField
              required
              value={newPassword}
              label="New Password"
              type="password"
              margin="dense"
            />
            <TextField
              required
              value={confirmPassword}
              label="Confirm Password"
              type="password"
              margin="dense"
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
