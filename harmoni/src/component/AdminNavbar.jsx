import React, { useEffect, useState } from "react";
import "../Css/AdminNavbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEnvelopeOpen,
  faListAlt,
  faBars,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faOpensuse,
  faWatchmanMonitoring,
} from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";

export default function AdminNavbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [curAdmin,setCurAdmin] = useState('');

  const Navigate = useNavigate();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const logout = () => {
    sessionStorage.removeItem(`accessToken`);
    Navigate("/");
    toast.success("Admin Logout");
  };

  const tokan = sessionStorage.getItem(`accessToken`);


  useEffect(()=> {
    axios.get(`http://localhost:3046/api/v1/admin/getcurrentAdmin`,{
      headers:{
        Authorization:tokan
      }
    })
    .then((res) => {
      console.log(res.data.data)
      setCurAdmin(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <div className="hola ">
      <div className={`leftNav ${isNavVisible ? "visible" : ""}`}>
        <div className="sist pl-3 cursor-pointer opacity-90 fixed">
          <ul className="linkse">
            <li
              onClick={() => Navigate("/admin/alluser")}
              className="los hover:text-green-500"
            >
              <FontAwesomeIcon icon={faListAlt} className="ic" />
              All User
            </li>
            <li
              onClick={() => Navigate("/admin/addEvent")}
              className="los hover:text-green-500"
            >
              <FontAwesomeIcon icon={faEnvelopeOpen} className="ic" />
              Event Post
            </li>
            <li
              onClick={() => Navigate("/admin/bookEvent")}
              className="los hover:text-green-500"
            >
              <FontAwesomeIcon icon={faBookmark} className="ic" />
              Book Event
            </li>
            <li
              onClick={() => Navigate("/admin/catagary")}
              className="los hover:text-green-500"
            >
              <FontAwesomeIcon icon={faWatchmanMonitoring} className="ic" />
              Post Catergary
            </li>
            <li
              onClick={() => Navigate("/admin/allmessage")}
              className="los hover:text-green-500"
            >
              <FontAwesomeIcon icon={faMessage} className="ic"/>
             
              All Message
            </li>
          </ul>
          <hr />
          <p className="cnt">Authantication</p>

          <ul className="linkse">
            <li onClick={logout} className="los hover:text-green-500">
              <FontAwesomeIcon icon={faOpensuse} className="ic " />
              Log out
            </li>
          </ul>
        </div>
      </div>

      <div className="hor-nav bg-slate-400 fixed">
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger-icon"
          onClick={toggleNav}
        />
        <h3 className="text-gray-800 mt-2 ml-4 font-semibold text-xl">Admin</h3>
        <h5 className="jfry text-gray-800 mt-1 ml-2 font-semibold ">
          <ul className="pidl cursor-pointer ">
            <li className="roun" onClick={() => Navigate("/admin/profile")}>
              {" "}
              <li className="roun pb-0">
                <img src="/img/boy.png" className="roun mb-5" />
              </li>
            </li>
          </ul>
          {curAdmin.fullName} <br />
          Admin
        </h5>
      </div>
    </div>
  );
}
