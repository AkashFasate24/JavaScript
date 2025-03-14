import React from "react";
import "./LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign UP</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder="Add your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?<span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Contiuing, iagree to term and policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
