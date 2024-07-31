import { useState } from "react";
import * as React from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State for managing form data and errors
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Reset error and success messages
    setError("");
    setSuccess("Signup successful!");

    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="container">
        <div className="col-md-8 col-lg-12 col-sm-6">
          <h2 className="text-center">Sign Up</h2>
          <p className="text-center">
            Already have an account? <Link to="login-page">login</Link>
          </p>
        </div>
        <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="form-floating mb-3 ">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Name"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
            <div className="form-floating mb-3 ">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark btn-block mt-3" >Sign Up</button>
            <a className="text-center p-2" href="">Forgot password?</a>
          </div>

            </div>

            <div className="col-md-6 col-lg-6 col-sm-12  socialButton">
                <button className="d-block btn btn-primary">SignUp with facebook</button>
                <button className="d-block btn btn-success">SignUp with Google</button>
            </div>
        </div>

       
      </div>
    </>
  );
};

export default SignUp;
