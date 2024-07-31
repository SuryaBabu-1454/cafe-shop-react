import { useState } from "react";
import * as React from "react";
import "../Pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap';

const SignUp = () => {
  const navigate = useNavigate();
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
    setSuccess("SignUp successfully!");

    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // Redirect to login page after a short delay
    setTimeout(() => {
      setSuccess("");
      navigate("/login-page");
    }, 2000); // Adjust the delay as needed
  };



  return (
    <>
      <div className="container">
        <div className="col-md-8 col-lg-12 col-sm-6">
          <h2 className="text-center">Sign Up</h2>
          <p className="text-center">
            Already have an account? <Link to="/login-page">login</Link>
          </p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="form-floating mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter Name"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3 ">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark btn-block mt-3">
                  Sign Up
                </button>
                <a className="text-center p-2" href="">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-sm-12 socialButton">
              <button className="d-block btn btn-primary">
                Sign Up with Facebook
              </button>
              <button className="d-block btn btn-success">
                Sign Up with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
