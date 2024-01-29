import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    return "";
  };

  return (
    <>
      <div className="mainSection">
        <div className="left-container">
          <div className="logo">
            <img className="vector" src="./assets/Vector 7.png" alt="" />
            <img src="./assets/Ellipse 111.png" alt="" />
          </div>

          <div className="base">
            <p>BASE</p>
          </div>

          <div className="social">
            <div className="img">
              <img src="./assets/Vector.png" alt="" />
              <img src="./assets/Vector.png" alt="" />
              <img src="./assets/carbon_logo-linkedin.png" alt="" />
              <img src="./assets/carbon_logo-discord.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="sign">
            <p className="signIn">Sign In</p>
            <p className="yourAccount">Sign in to your account</p>
            <div className="goggle">
              <div className="split style">
                <div className="goggleStyle">
                  <img src="./assets/google.png" alt="" />
                </div>
                <div>
                  <p>sign in with google</p>
                </div>
              </div>

              <div className="split style">
                <di className="goggleStyle">
                  <img src="./assets/apple.png" alt="" />
                </di>
                <div>
                  <p>sign in with google</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="password" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
            />

            <p className="forgotPassword">Forgot Password?</p>
            <button type="submit">Sign In</button>
          </form>
          <div className="account">
            <p>
              Dont have an account?<span> Register here</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
