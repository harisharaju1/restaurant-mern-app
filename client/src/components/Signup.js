import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, useHistory } from "react-router-dom";

//import the subsets of the validator npm package as per requirement
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";

import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { signup } from "../api/auth";
import { isAuthenticated } from "../helpers/auth";

const Signup = () => {
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/user/dashboard");
    }
  }, [history]);
  /***************************
   *
   * COMPONENT STATE
   *
   ***************************/
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    successMsg: "",
    errorMsg: "",
    loading: false,
  });
  //destructure form data members for easier accessibility instead of
  //having to reference them by formData.username, formData.password1, etc,.
  const {
    username,
    email,
    password1,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;
  /***************************
   *
   * EVENTHANDLERS
   *
   **************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //client-side validation

    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password1) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields must be filled!",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else if (!equals(password1, password2)) {
      setFormData({
        ...formData,
        errorMsg: `Passwords don't match`,
      });
    } else {
      //destructure the form data and pull out exactly what is needed
      const { username, email, password1 } = formData;
      const data = { username, email, password1 };

      setFormData({ ...formData, loading: true });

      signup(data)
        .then((response) => {
          //console.log('Axios signup success',response);
          setFormData({
            username: "",
            email: "",
            password1: "",
            password2: "",
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          //console.log('Axios signup error',err);
          //console.log(err.response.data.errorMessage);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }

    //console.log(formData);
  };
  /***************************
   *
   * VIEWS
   *
   **************************/
  const showSignupForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      {/* username */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
        </div>
        <input
          name="username"
          className="form-control"
          placeholder="Username"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>

      {/* email */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
        <input
          name="email"
          className="form-control"
          placeholder="Email Address"
          type="text"
          value={email}
          onChange={handleChange}
        />
      </div>

      {/* password */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          name="password1"
          className="form-control"
          placeholder="Create Password"
          type="password"
          value={password1}
          onChange={handleChange}
        />
      </div>

      {/* password2 */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
        </div>
        <input
          name="password2"
          className="form-control"
          placeholder="Confirm Password"
          type="password"
          value={password2}
          onChange={handleChange}
        />
      </div>

      {/* signup button */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </div>

      {/* already have account */}
      <p className="text-center text-blue">
        Have an account? <Link to="/signin">Log In</Link>
      </p>
    </form>
  );
  /***************************
   *
   * RENDERER
   *
   **************************/
  return (
    <div className="signup-container">
      <div className="row px=5 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {showSignupForm()}
          {errorMsg && showErrorMsg(errorMsg)}
          {successMsg && showSuccessMsg(successMsg)}
          {loading && <div className="text-center">{showLoading()}</div>}
          {/* <p style={{ color: 'white'}}>{JSON.stringify(formData)}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
