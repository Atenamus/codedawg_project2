import React from "react";
import "./signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const handleSignin = () => {
    alert("Signed In!");
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="container">
      <div id="signinpg">
        <h1>Sign In</h1>
        <h4 id="resetpassword">Reset Password</h4>
        <form onSubmit={handleSubmit}>
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
            onClick={handleSignin}
          >
            Sign In
          </button>
          <h5 id="or">or</h5>
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
        </form>
      </div>
      <div id="info">
        <h2 className="page-title">Create an Account</h2>
        <p id="desc">
          <img
            id="icon1"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgO1rTuPwwaR2ARgYTexxlYFXgKJDiaXVsVye5zuvxrJsaOSAr"
            alt="credit"
          />
          Save payment to view in-store purchases
        </p>
        <p id="desc">
          <img
            id="icon2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7H070ePqgN0L0JW_u3Ca2rwaqYP0MYRv3I2sZRMQT9RS6hudD"
            alt="star"
          />
          Redeem Rewards
        </p>
        <p id="desc">
          <img
            id="icon3"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUR82t6mGfber5WbXM1IxsX2ZcyW6Ke_6zYLAfnAmxySDNwdgS"
            alt="bag"
          />
          Speedy checkout
        </p>
        <p id="desc">
          <img
            id="icon4"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTais94TojWGgrgDJ9rwBOhC0VrINgec1R2bcmWgEfR3pwWZbk3"
            alt="truck"
          />
          Easily track orders and view order history
        </p>
        <p id="desc">
          <img
            id="icon5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0yleg1xM1P-KDoCE_J5XBLRaaMht9alDYkuk4za0ZOtsx7Cm"
            alt="circle"
          />
          Create a Registry
        </p>
        <p id="desc">
          <img
            id="icon6"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnpv5amYSJUh2FYLyYAUngzXaTLENu0jluTn6IDUSWYxgH0ufQ"
            alt="sofa"
          />
          View Your Design Packages
        </p>
        <p id="desc">
          <img
            id="icon7"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNMJ3B_gykkc8JnAApmni6edrHyp6HKaTtRP5hC_c7R6Fdgg5B"
            alt="heart"
          />
          Manage Favorites Lists
        </p>
        <button
          className="button-primary button-md create-account-button"
          onClick={handleSignup}
        >
          Create Account
        </button>
        <p>
          Don't have an order?
          <span>
            <a href="/">Track/Schedule Order</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
