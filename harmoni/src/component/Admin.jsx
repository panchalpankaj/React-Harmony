import React, { useState } from "react";
import "../Css/Admin.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

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

        if(res.data.success == true)
        {
          toast.success(res.data.message)
          Navigate('/');
        }
        else{
          toast.error(res.data.message)
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handelCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <img src="/img/space_2.jpg" className="admin" />
      <div className="formw border-2 rounded bg-slate-200 opacity-80 z-0">
        <div className="z-10 opacity-100">
        <FontAwesomeIcon icon={faLock} id="locku" />
        <p className="logs text-gray-700">LOGIN</p>
        <input
          type="text"
          placeholder="Email"
          className="inpus text-black"
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
          <p className="rememyu text-gray-800">Remember me</p>
        </label>
        <button className="logbtnl" onClick={login}>
          <p className="lo">Login</p>
        </button>
      </div>
      </div>
    </div>
  );
}
