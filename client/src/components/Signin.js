import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, useHistory } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { signin } from "../api/auth";
import { setAutentication, isAuthenticated } from "../helpers/auth";
import { GoogleLogin } from "react-google-login";

const Signin = () => {
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
    email: "",
    password1: "",
    errorMsg: "",
    loading: false,
    google: false,
  });
  const { email, password1, errorMsg, loading } = formData;

  /***************************
   *
   * EVENTHANDLERS
   *
   **************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //client-side validation

    if (isEmpty(email) || isEmpty(password1)) {
      setFormData({
        ...formData,
        errorMsg: "All fields must be filled!",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else {
      //destructure the form data
      const { email, password1 } = formData;
      const data = { email, password1 };

      setFormData({ ...formData, loading: true });

      signin(data)
        .then((response) => {
          //console.log('Axios signin success',response);

          setAutentication(response.data.token, response.data.user);

          setFormData({
            email: "",
            loading: false,
          });

          if (isAuthenticated() && isAuthenticated().role === 1) {
            //console.log('Redirecting to admin dashboard');
            history.push("/admin/dashboard");
          } else {
            //console.log('Redirecting to user dashboard');
            history.push("/user/dashboard");
          }
        })
        .catch((err) => {
          //console.log('Axios signin error',err);
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

  const handleGoogleSignIn = (res) => {
    console.log(res.profileObj);
    const email = res.profileObj.email;
    const password1 = res.profileObj.googleId;
    const { google } = formData;

    setFormData({ ...formData, loading: true, google: true });

    const data = { email, password1, google };

    signin(data)
      .then((response) => {
        //console.log('Axios signin success',response);

        setAutentication(response.data.token, response.data.user);

        setFormData({
          email: "",
          loading: false,
          google: true,
        });

        if (isAuthenticated() && isAuthenticated().role === 1) {
          //console.log('Redirecting to admin dashboard');
          history.push("/admin/dashboard");
        } else {
          //console.log('Redirecting to user dashboard');
          history.push("/user/dashboard");
        }
      })
      .catch((err) => {
        //console.log('Axios signin error',err);
        //console.log(err.response.data.errorMessage);
        setFormData({
          ...formData,
          loading: false,
          errorMsg: err.response.data.errorMessage,
        });
      });
  };

  /**********************************
   *
   * VIEW
   *
   **********************************/
  const showSigninForm = () => (
    <form className="signin-form" onSubmit={handleSubmit} noValidate>
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
          placeholder="Enter Password"
          type="password"
          value={password1}
          onChange={handleChange}
        />
      </div>

      {/* signin button */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
      </div>
    </form>
  );

  const showGoogleSigninForm = () => (
    <div>
      <GoogleLogin
        clientId="502754473995-226j6g6e5so57odjg6iee2juae5e25d0.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="btn btn-primary btn-block"
            //className={classes.googleButton}
            color="primary"
            // fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            //startIcon={<Icon />}
            variant="contained"
          >
            Sign In using Google
          </button>
        )}
        onSuccess={handleGoogleSignIn}
        onFailure={() => {
          console.log("failure");
        }}
        cookiePolicy="single_host_origin"
      />
    </div>
  );

  /*****************************
   *
   * VIEW RENDERER
   *
   *****************************/
  return (
    <div className="signin-container">
      <div className="row px=5 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {showSigninForm()}
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center">{showLoading()}</div>}
          {/* <p style={{ color: 'white'}}>{JSON.stringify(formData)}</p> */}
          {/* sign in with google */}
          {showGoogleSigninForm()}
          {/* DON'T have account */}
          <br />
          <p className="text-center text-white">
            Don't have an account? <Link to="/signup">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
