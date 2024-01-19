// LoginForm.js
import React from 'react';        //Imports
import './LoginForm.css';
                                  //Login with className div and h3
const LoginForm = () => {         //label and input for username and password
  return (
    <div className="login-form">
      <h3 className="login-heading">Log In</h3>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" className="username-input" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className="password-input" />
      </form>
    </div>
  );
};

export default LoginForm;
