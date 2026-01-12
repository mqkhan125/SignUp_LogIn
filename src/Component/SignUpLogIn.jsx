import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUpLogIn = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <FaRegUser className="icon" />
          <input type="text" placeholder="Name" />
        </div>

        <div className="input">
          <AiOutlineMail className="icon" />
          <input type="email" placeholder="Email ID" />
        </div>

        <div className="input">
          <RiLockPasswordLine className="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="forgot-password">
        Forgot Password? <span>Click Here!</span>
      </div>

      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Log In</div>
      </div>
    </div>
  );
};

export default SignUpLogIn;
