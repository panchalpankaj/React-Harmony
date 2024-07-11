import React, { useState } from "react";
import "../Css/Signin.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Signin() {
  const Navigate = useNavigate("");

  const [isChecked, setIsChecked] = useState(false);
  const [mobile_no, setPhno] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const data = { mobile_no, password };
    axios
      .post(`http://localhost:3046/api/v1/users/login`, data)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem('accessToken',res.data.accessToken);
        Navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="signin">
        <img src="/img/signin_up.jpg" className="imgese" />

        <div className="forms">
          <div className="iconlock">
            <FontAwesomeIcon icon={faLock} className="locks" />
          </div>
          <h3 className="sign">Sign In</h3>
          <div className="inpu">
            <input
              value={mobile_no}
              onChange={(e) => setPhno(e.target.value)}
              type="text"
              placeholder="Phone*"
              className="tf"
            ></input>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password*"
              className="tf"
            ></input>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={isChecked}
              />
              <p className="remem">Remember me</p>
            </label>
            <button onClick={login} className="btn">
              Signin
            </button>
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
