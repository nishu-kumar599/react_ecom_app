import Login from "../Login/Login";
import SignUp from "../SignUp/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const LoginSignButtonPage = () => {
  const [login, setLogin] = useState(false);
  const SignupHandle = () => {
    setLogin((prevstate) => !prevstate);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <div className="col-sm-12 text-center changebutton">
            {login ? <SignUp /> : <Login />}
            <button class="changevalue" onClick={SignupHandle}>
              {login ? "login" : "signUp"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSignButtonPage;
