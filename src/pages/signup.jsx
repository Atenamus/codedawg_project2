import React from "react";
import "./signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleSignup = () => {
    alert("Signed Up!");
    navigate("/signin");
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FName:", firstName);
    console.log("LName:", lastName);
    console.log("Name:", phoneNumber);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  useEffect(() => {
    if (firstName && lastName && phoneNumber && email && password) {
      window.location.href = "/signin";
    }
  }, [firstName, lastName, phoneNumber, email, password]);

  return (
    <div className="signup">
      <h1 className="title">Create an Account</h1>
      <p className="desc">
        Want to check out faster, easily apply Rewards and keep track of your
        online and in-store orders? Create an account now and save your payment
        method. It's even easier when you sign up using Google or Apple.
      </p>
      <form onSubmit={handleSubmit}>
        <button type="button" className="createbutton">
          <img
            id="apple"
            src="https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg"
            alt="Apple logo"
          />
          CREATE USING APPLE
        </button>
        <button type="button" className="createbutton">
          <img
            id="google"
            src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
            alt="Google logo"
          />
          CREATE USING GOOGLE
        </button>
        <label>
          <p className="label">
            First Name
            <span className="required">required</span>
          </p>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <p className="label">
            Last Name
            <span className="required">required</span>
          </p>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          <p className="label">
            Phone Number <span className="required">required</span>
          </p>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          <p className="label">
            Email
            <span className="required">required</span>
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p className="label">
            Password
            <span className="required">required</span>
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="button-primary button-md create-account-button"
          onClick={handleSignup}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
