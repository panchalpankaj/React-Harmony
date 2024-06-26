import React, { useState } from "react";
import "../Css/Signup.css";
import "../Css/Signin.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [selectOption, setSelectOption] = useState("");
  const [isChecked,setIsChecked] = useState(false);

  const Navigate = useNavigate('');

  const handleSelect = (e) => {
    setSelectOption(e.target.value);
  };

  const handl = (e) => {
    setIsChecked(e.target.checked);
  }

  return (
    <div>
      <Navbar/>
      <div className="signin">
        <img src="/img/signin_up.jpg" className="imgese" />

        <div className="forms">
        <div className="iconlock">
          <FontAwesomeIcon icon={faLock}  className="locks"/>
          </div>
          <h3 className="signy">Sign Up</h3>

          <div className="inpus">
            <input type="text" placeholder="Name*" className="tf"></input>
            <input type="email" placeholder="email*" className="tf"></input>

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

            <input type="text" placeholder="Phone Number*" className="tf"></input>

            <input type="password" placeholder="Password*" className="tf"></input>
            <input type="password" placeholder="Confirmed Password*" className="tf"></input>
            <input type="password" placeholder="Confirmed Password*" className="tf"></input>
            <label className="check">
            <input type="checkbox" checked={isChecked} onChange={handl} className="checked"/>Remember me
            </label>
            <button className="btn">Signin</button>
            <p>Alrady have an Account <span className="lin" onClick={() => Navigate('/Signin')}>Sigin in</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
