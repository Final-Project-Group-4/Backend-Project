import { TextField } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { toast } from "react-toastify";
import axios from "axios";
import "./_Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch, isLoading } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      //API call
      const res = await axios.post(`/api/admin/login`, {
        email: email,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      toast.error(err.response.data.message);
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
              <button className="btn-primary btn-login" disabled={isLoading}>
                Login
              </button>
            </div>
            <p>
              <Link to="/forgotpassword" className="forgot-link">
                If you want to reset your password, please click here.
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
