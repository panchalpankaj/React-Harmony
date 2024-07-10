import React, { useEffect, useState } from "react";
import "../Css/Alluser.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

export default function Alluser() {
  const [userdata, setData] = useState([]);

  const token = sessionStorage.getItem(`accessToken`);
  // console.log(token)

  useEffect(() => {
    axios
      .get("http://localhost:3046/api/v1/admin/getalluser", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="allu">
        <ul className="blackindex">
          <li>No</li>
          <li>Profile</li>
          <li>Name</li>
          <li>Email</li>
          <li>Gender</li>
          <li>Phone Numebr</li>
          <li>Action</li>
        </ul>

        {userdata.map((user, index) => (
          <ul className="users">
            <li>{index + 1}</li>
            <li className="roun">
              <img src={user.avatar} className="roun" />
            </li>
            <li>{user.fullName}</li>
            <li>{user.email}</li>
            <li>{user.gender}</li>
            <li>{user.mobile_no}</li>
            <button className="unblock">unBlock</button>
          </ul>
        ))}
      </div>
    </div>
  );
}
