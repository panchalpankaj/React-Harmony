import React, { useState } from "react";
import "../Css/Passwordchange.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Passwordchange() {
  const Navigator = useNavigate();
  const [password, setPassword] = useState("");
  const [newPassword, setUpdatepass] = useState("");

  const tokan = sessionStorage.getItem("accessToken");
  // console.log(tokan)

  const fd = new FormData();
  fd.append("password", password);
  fd.append("newPassword", newPassword);

  const update = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3046/api/v1/admin/passwordChange", fd, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        console.log(res);
        if(res.data.success == true)
        {
          toast.success(res.data.message)
        }
        else{
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        console.log(err);
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
          <button className="blackbtn"  onClick={() => Navigator('/admin/profile')}>Persnal Detail</button>
          <button className="blackbtn">Change Password</button>
        </div>
        <div className="whitelogo2">
          <p className="lossa">Change Admin Password</p>
          <div className="inpio ">
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
              value={newPassword}
              onChange={(e) => setUpdatepass(e.target.value)}
            >
              New Password:
              <input type="password" className="ips"></input>
            </label>
          </div>
          <button
            className="bg-green-400 text-white rounded p-2 px-3 hover:bg-green-300 ml-2 mt-3 lg:flex lg:flex-col lg:float-end lg:mr-3"
            onClick={update}
          >
            UpDate
          </button>
        </div>
      </div>
    </div>
  );
}
