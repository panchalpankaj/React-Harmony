import React, { useEffect, useState } from "react";
import "../Css/Profile.css";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const Navigater = useNavigate();

  const [adminInfo, setadminInfo] = useState({});
  const tokan = sessionStorage.getItem(`accessToken`);
  // console.log(tokan)

  useEffect(() => {
    axios
      .get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setadminInfo(res.data.data);
        
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="profiles">
        <div className="whitelogo">
          <img src="/img/boy.png" className="rounsd" />
        </div>
        <div className="btlko">
          <button className="blackbtn">Persnal Detail</button>
          <button className="blackbtn" onClick={() => Navigater("./password")}>
            Change Password
          </button>
        </div>
        <div className="whitelogo2">
          <p className="lossa">Persnal Detail</p>

          {adminInfo && (
            <div className="inpio">
              <label className="lab">
                Full Name:
                <input
                  type="text"
                  value={adminInfo.fullName}
                  className="ips"
                ></input>
              </label>
              <label className="lab">
                Email Adrees:
                <input
                  type="email"
                  value={adminInfo.email}
                  className="ips"
                ></input>
              </label>
            </div>
          )}

          <button className="btnyu">UpDate</button>
        </div>
      </div>
    </div>
  );
}
