import React, { useState } from "react";
import bgImg from "../assets/logo2.png";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [firstName, setFirstName] = useState("");
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign Up</h2>
          <span>Enjoy the service {firstName}</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="input_field">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <div class="error"></div>
            </div>
            <div class="input_field">
              <input type="email" placeholder="Email" />
              <div class="error"></div>
            </div>
            <div class="input_field">
              <input type="text" placeholder="Password" />
              <div class="error"></div>
            </div>
            <div class="input_field">
              <input type="text" placeholder="Mobile number" />
              <div class="error"></div>
            </div>
            <div class="input_field">
              <button className="btn">Sign Up</button>
              <div class="error"></div>
            </div>
          </form>
          <p>
            Already have an account? <span>Signup</span>
          </p>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="background" />
        </div>
      </div>
    </section>
  );
}
