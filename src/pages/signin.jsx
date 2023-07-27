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
        <h3>Sign In</h3>
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
          <h5>or</h5>
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
            id="icon"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgO1rTuPwwaR2ARgYTexxlYFXgKJDiaXVsVye5zuvxrJsaOSAr"
            alt="credit"
          />
          Save payment to view in-store purchases
        </p>
        <p id="desc">
          <img
            id="icon"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDTD3fVe7rmyaaimf26AnIyZ1ZSzEF4-c4W8Lj_1IT4_IAR6Zp"
            alt="star"
          />
          Save payment to view in-store purchases
        </p>
        <p id="desc">
          <img
            id="icon"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUR82t6mGfber5WbXM1IxsX2ZcyW6Ke_6zYLAfnAmxySDNwdgS"
            alt="bag"
          />
          Save payment to view in-store purchases
        </p>
        <p id="desc">
          <img id="icon" src="" alt="truck" />
          Save payment to view in-store purchases
        </p>
        <p id="desc">
          <img id="icon" src="" alt="circle" />
          Save payment to view in-store purchases
        </p>
        <p id="desc">
          <img id="icon" src="" alt="sofa" />
          Save payment to view in-store purchases
        </p>
        <p id="desc">
          <img id="icon" src="" alt="heart" />
          Save payment to view in-store purchases
        </p>
      </div>
    </div>
  );
}

export default Signin;
