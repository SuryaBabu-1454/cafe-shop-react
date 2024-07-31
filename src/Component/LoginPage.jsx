import { useState, useEffect } from "react";
import * as React from "react";
import "../Pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Reset error and success messages
    setError("");
    setSuccess("Login successful!");

    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // Redirect to home page after a short delay
    setTimeout(() => {
      setSuccess("");
      navigate("/");
    }, 2000); // Adjust the delay as needed
  };

  // Clear messages after a delay
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000); // Clear messages after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <>
      <div className="container">
        <div className="col-md-8 col-lg-12 col-sm-6">
          <h2 className="text-center">Login</h2>
          <p className="text-center">
            Don't have an account? <Link to="/signup-page">Sign Up</Link>
          </p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
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
              <div className="d-grid">
                <button type="submit" className="btn btn-dark btn-block mt-3">
                  Login
                </button>
                <a className="text-center p-2" href="">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
