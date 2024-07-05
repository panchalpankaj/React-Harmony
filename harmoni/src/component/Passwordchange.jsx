import React, { useState } from "react";
import "../Css/Passwordchange.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

export default function Passwordchange() {
  const [password, setPassword] = useState("");
  const [updatePass, setUpdatepass] = useState("");

  const update = async (e) => {
    e.preventDefault();
    const data = { password, updatePass };
    axios
      .post("http://localhost:3046/api/v1/users/passwordChange", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="profiles">
        <div className="whitelogo">
          <img src="/img/boy.png" className="rounsd" />
        </div>
        <div className="btlko">
          <button className="blackbtn">Persnal Detail</button>
          <button className="blackbtn">Change Password</button>
        </div>
        <div className="whitelogo2">
          <p className="lossa">Change Password</p>
          <div className="inpio">
            <label className="lab">
              Old Password:
              <input
                type="password"
                className="ips"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <label
              className="lab"
              value={updatePass}
              onChange={(e) => setUpdatepass(e.target.value)}
            >
              New Password:
              <input type="password" className="ips"></input>
            </label>
            {/* <label className="lab">
              Confirm Password:
              <input type="password" className="ips"></input>
            </label> */}
          </div>
          <button className="btnyu" onClick={update}>
            UpDate
          </button>
        </div>
      </div>
    </div>
  );
}
