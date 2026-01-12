import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUpLogIn = () => {

  const [action , setAction] = useState("Sign Up")

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
        <div className="input">
          <FaRegUser className="icon" />
          <input type="text" placeholder="Name" />
        </div>
        )}

          <div className="input">
            <AiOutlineMail className="icon" />
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="input">
            <RiLockPasswordLine className="icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

  {action === "Login" && (
      <div className="forgot-password">
        Forgot Password? <span>Click Here!</span>
      </div>
)}

      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
          Sign Up
        </div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default SignUpLogIn;
