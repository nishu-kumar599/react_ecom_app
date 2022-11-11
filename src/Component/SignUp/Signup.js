import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Component/SignUp/Signup.css";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailchange = (e) => {
    const email = e.target.value;
    if (email) {
      setEmail(email);
    }
  };
  const handelPasswordChange = (e) => {
    const password = e.target.value;
    if (password) {
      setPassword(password);
    }
  };
  const handleSubmit = async () => {
    // console.log(email);
    // console.log(password);
    const Data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3zGfCoCpn_5IeH7a_u1-ax1BUllqeqCI",
      {
        email: email,
        password: password,
      }
    );
    console.log(Data);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>SignUp</h1>
        <br />
        <div className="row justify-content-center text-center">
          <div className="col-sm-5 pt-30  bg-black text-center">
            <div>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={handleEmailchange}
              />
              <br />

              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={handelPasswordChange}
              />

              <br />
              <button class="text-center" type="button" onClick={handleSubmit}>
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
