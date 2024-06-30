import React, { useState } from "react";
import "../Css/AdminNavbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEnvelopeOpen,
  faListAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faOpensuse,
  faWatchmanMonitoring,
} from "@fortawesome/free-brands-svg-icons";

export default function AdminNavbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const Navigate = useNavigate();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="hola">
      <div className={`leftNav ${isNavVisible ? 'visible' : ''}`}>
        <div className="sist pl-3 cursor-pointer">
          <ul className="linkse">
            <li onClick={() => Navigate("/admin/alluser")} className="los hover:text-green-500">
              <FontAwesomeIcon icon={faListAlt} className="ic" />
              All User
            </li>
            <li onClick={() => Navigate("/admin/addEvent")} className="los hover:text-green-500">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="ic" />
              Event Post
            </li>
            <li onClick={() => Navigate("/admin/alluser")} className="los hover:text-green-500">
              <FontAwesomeIcon icon={faBookmark} className="ic" />
              Book Event
            </li>
            <li onClick={() => Navigate("/admin/catagary")} className="los hover:text-green-500">
              <FontAwesomeIcon icon={faWatchmanMonitoring} className="ic" />
              Post Catergary
            </li>

        </ul>
            <hr />
        <p className="cnt">Authantication</p>
        <ul className="linkse">
          <li onClick={() => Navigate("/admin/alluser")} className="los hover:text-green-500">
            <FontAwesomeIcon icon={faOpensuse} className="ic " />
            Log out
          </li>
          </ul>
        </div>
       
        
      </div>

      <div className="hor-nav">
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger-icon"
          onClick={toggleNav}
        />
        <h3>Admin</h3>
        <h5 className="jfry">
          <ul className="pidl cursor-pointer ">
            <li className="roun" onClick={() => Navigate("/admin/profile")}>
              {" "}
              <li className="roun">
                <img src="/img/boy.png" className="roun" />
              </li>
            </li>
          </ul>
          Event Managment <br />
          Admin
        </h5>
      </div>
    </div>
  );
}
