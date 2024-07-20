import React, { useEffect, useState } from "react";
import "../Css/Profile.css";
import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Profile() {
  const Navigater = useNavigate();

  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const tokan = sessionStorage.getItem(`accessToken`);
  // console.log(tokan)

  const fd = new FormData();
  fd.append("fullName", fullName);
  fd.append("email", email);

  const updata = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:3046/api/v1/admin/update`, fd, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.success == true) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
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
        <div className="flex justify-between">
        <div className="btlko">
          <button className="blackbtn">Persnal Detail</button>
          <button className="blackbtn" onClick={() => Navigater("./password")}>
            Change Password
          </button>
        </div>
          <button className="float-end px-2 bg-yellow-500 mt-2 mr-8 rounded-lg text-white font-semibold hover:bg-yellow-300 transition duration-300 " onClick={() => Navigater("/admin/addadmin")}>Add Admin</button>
          </div>
        <div className="whitelogo2"> 
          <p className="lossa">Update Admin FullName and Email Detail</p>

        
            <div className="inpio">
              <label className="lab">
                Full Name:
                <input
                  type="text"
                  className="ips"
                  value={fullName}
                  onChange={(e) => setFullname(e.target.value)}
                ></input>
              </label>
              <label className="lab">
                Email Adrees:
                <input
                  type="email"
                  className="ips"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </label>
            </div>
         

          <button className="btnyu hover:bg-slate-700 duration-300" onClick={updata}>
            UpDate
          </button>
        </div>
      </div>
    </div>
  );
}
