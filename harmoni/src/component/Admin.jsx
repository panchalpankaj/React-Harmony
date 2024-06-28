import React, { useState } from "react";
import "../Css/Admin.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export default function Admin() {
  const [isChecked, setIsChecked] = useState(false);

  const handelCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const Navigate = useNavigate("");

  return (
    <div>
      <img src="/img/space1.jpg" className="admin" />
      <div className="formw">
        <FontAwesomeIcon icon={faLock} id="locku" />
        <p className="logs">LOGIN</p>
        <input type="text" placeholder="Email" className="inpus" />
        <input type="password" placeholder="Password" className="inpus" />
        <label className="checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handelCheck}
            className="checkboxyu"
          />
          <p className="rememyu">Remember me</p>
        </label>
        <button className="logbtnl" onClick={() => Navigate("./alluser")}>
          <p className="lo">Login</p>
        </button>
      </div>
    </div>
  );
}
