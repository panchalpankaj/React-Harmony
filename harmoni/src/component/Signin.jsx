import React, { useState } from "react";
import "../Css/Signin.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export default function Signin() {
  const Navigate = useNavigate("");

  const [isChecked, setIsChecked] = useState(false);

  const handelCheck = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <Navbar/>
      <div className="signin">
        <img src="/img/signin_up.jpg" className="imgese" />

        <div className="forms">
        <div className="iconlock">
          <FontAwesomeIcon icon={faLock}  className="locks"/>
          </div>
          <h3 className="sign">Sign In</h3>
          <div className="inpu">
            <input
              type="email"
              placeholder="Email Adrees*"
              className="tf"
            ></input>
            <input
              type="password"
              placeholder="Password*"
              className="tf"
            ></input>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handelCheck}
              />
              <p className="remem">Remember me</p>
            </label>
            <button className="btn">Signin</button>
            <div className="forwad">
              <p>Forgate Password</p>
              <p>
                Alrady have Account{" "}
                <span onClick={() => Navigate("/Signup")} className="lin">
                  Sign Up
                </span>
              </p>
            </div>
            <p className="centr">Copyright @ All right reserve</p>
          </div>
        </div>
      </div>
    </div>
  );
}
