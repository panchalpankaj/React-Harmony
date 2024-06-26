import React, { useState } from "react";
import "../Css/Changedetail.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function Changedetail() {
  const [selectOption, setSelectOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSelect = (e) => {
    setSelectOption(e.target.value);
  };

  const handl = (e) => {
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
          <h3 className="signys">Change User Detail</h3>
          <div className="inpupp">
            <label>Name</label>
            <input type="text" className="tf"></input>
            <label>Email</label>
            <input type="email" className="tf"></input>

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
            <label>Phone Number</label>
            <input type="text" className="tf"></input>
            <label className="check">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handl}
                className="checked"
              />
              Remember me
            </label>
            <button className="btn">Change</button>
            <div className="forwad">
              <p>Forgate Password</p>
            </div>
            <p className="centr">Copyright @ All right reserve</p>
          </div>
        </div>
      </div>
    </div>
  );
}
