import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <div className="signup_container">
        <div className="signup_main">
          <div className="signup_form">
            <div className="signup_title">
              <h3>Signup</h3>
              <span>
                Already Register? <a href="/Login">Login</a> Here
              </span>
            </div>

            <div className="text_boxes">
              <div className="name">
                <input
                  type="text"
                  className="text_input"
                  placeholder="Enter Name"
                />
              </div>
              <div className="name">
                <input
                  type="email"
                  className="text_input"
                  placeholder="Enter Email"
                />
              </div>
              <div className="name">
                <input
                  type="number"
                  className="text_input"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="name">
                <input
                  type="password"
                  className="text_input"
                  placeholder="Enter Password"
                />
              </div>
              <div className="name">
                <input
                  type="password"
                  className="text_input"
                  placeholder="Enter password again"
                />
              </div>
              <div className="btn_signup">
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
