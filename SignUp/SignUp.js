import React, { useState } from "react";
import "./UserSignUp.css"; // Import your CSS file
import floatingman from "../../assets/images/floatingman.png";
import logo from "../../assets/images/LOGO.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  // Define state variables for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    education: "",
    dateOfBirth: "",
    phoneNumber: "",
  });

  // Define a state variable for the alert message
  const [alertMessage, setAlertMessage] = useState("");

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here (e.g. form validation, API call, etc.)
    if (formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords do not match");
    } else {
      setAlertMessage("Registration successful!");
    }
  };

  return (
    <div>
      {/* Home Logo */}
      <div className="home_logo">
        <a href="index.html">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {/* Alert message container */}
      {alertMessage && (
        <div id="alert-message-container" className="alert-container">
          {alertMessage}
        </div>
      )}

      {/* Wrapper for the form */}
      <div className="wrapper2">
        {/* Left column for the background image */}
        <div className="bg-image">
          <img src={floatingman} alt="Floating Man" />
        </div>

        {/* Right column for the form */}
        <div className="form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            {/* Username input */}
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Email input */}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Password input */}
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Confirm password input */}
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Education level dropdown */}
            <div className="input-box">
              <select
                name="education"
                className="select-box"
                value={formData.education}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled selected>
                  Select Education Level
                </option>
                <option value="high-school">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="doctorate">Doctorate Degree</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Date of birth input */}
            <div className="input-box">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Phone number input */}
            <div className="input-box">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Register button */}

            <Link to="\"> 
              <button type="submit" className="btn">
                Register
              </button>
            </Link>
            {/* Sign in link */}
            <div className="register-link">
              <p>
                Have an account? <a href="SignIn.html">Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
