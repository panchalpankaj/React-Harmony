import React, { useState } from "react";
import "../Css/Signup.css";
import "../Css/Signin.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  const [selectOption, setSelectOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPass] = useState("");

  const Navigate = useNavigate("");

  const handleSelect = (e) => {
    setSelectOption(e.target.value);
  };

  const handl = (e) => {
    setIsChecked(e.target.checked);
  };

  const signin = async (e) => {
    e.preventDefault();
    const data = { fullName, email, mobile_no, gender, password };
   await axios
      .post(`http://localhost:3046/api/v1/users/register`, data)
      .then((r) => {
        if (r.data.success == true) {
          console.log(r);
          toast.success(r.data.message);
          Navigate("/");
        } else {
          toast.error(r.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
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
          <h3 className="signy">Sign Up</h3>

          <div className="inpus">
            <input
              type="text"
              placeholder="Name*"
              className="tf"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="email*"
              className="tf"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <div className="radio-group">
              <label className="labse">
                <input
                  type="radio"
                  value="option1"
                  checked={selectOption === "option1"}
                  onChange={handleSelect}
                />
                <p className="opop"> Option 1</p>
              </label>
              <label className="labse">
                <input
                  type="radio"
                  value="option2"
                  checked={selectOption === "option2"}
                  onChange={handleSelect}
                />
                <p className="opop"> Option 2</p>
              </label>
              <label className="labse">
                <input
                  type="radio"
                  value="option3"
                  checked={selectOption === "option3"}
                  onChange={handleSelect}
                />
                <p className="opop"> Option 3</p>
              </label>
            </div>

            <input
              type="text"
              placeholder="Phone Number*"
              className="tf"
              value={mobile_no}
              onChange={(e) => setmobile_no(e.target.value)}
            ></input>

            <input
              type="text"
              placeholder="gender*"
              className="tf"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password*"
              className="tf"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            ></input>

            <label className="check">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handl}
                className="checked"
              />
              Remember me
            </label>
            <button className="btn" onClick={signin}>
              Signin
            </button>
            <p>
              Alrady have an Account{" "}
              <span className="lin" onClick={() => Navigate("/Signin")}>
                Sigin in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
