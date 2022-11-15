import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./Component/Pages/LoginPage.css";
import "./Component/Login/Login.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value) {
      setEmail(value);
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password) {
      setPassword(password);
    }
  };

  const handleSubmit = async () => {
    var data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3zGfCoCpn_5IeH7a_u1-ax1BUllqeqCI",
      {
        email: email,
        password: password,
      }
    );
    navigate({ pathname: "./Dashboard" }, { replace: true });
    console.log(data);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Login</h1>
        <br />
        <div className="row justify-content-center text-center">
          <div className="col-sm-5 pt-30  bg-black text-center">
            <div>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <button class="text-center" type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
