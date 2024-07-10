import React, { useState } from "react";
import "../Css/Admin.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const Navigate = useNavigate("");

  const login = async (e) => {
    e.preventDefault();
    const data = { email, password };
    
    axios
      .post(`http://localhost:3046/api/v1/admin/login`, data)
      .then((res) => {
        console.log(res);
        console.log(res.data.accessToken);
        sessionStorage.setItem("accessToken", res.data.accessToken);
        Navigate("/admin/alluser");
      })
      .catch((e) => {
        console.log(e);
        alert("Invalid");
      });
  };

  const handelCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <img src="/img/space1.jpg" className="admin" />
      <div className="formw">
        <FontAwesomeIcon icon={faLock} id="locku" />
        <p className="logs">LOGIN</p>
        <input
          type="text"
          placeholder="Email"
          className="inpus"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="inpus"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handelCheck}
            className="checkboxyu"
          />
          <p className="rememyu">Remember me</p>
        </label>
        <button className="logbtnl" onClick={login}>
          <p className="lo">Login</p>
        </button>
      </div>
    </div>
  );
}
