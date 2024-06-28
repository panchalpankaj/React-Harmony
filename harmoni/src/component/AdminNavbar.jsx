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
        <div className="jsb"> </div>
        <div className="sist">
          <ul className="linkse">
            <li onClick={() => Navigate("/admin/alluser")} className="los">
              <FontAwesomeIcon icon={faListAlt} className="ic" />
              All User
            </li>
            <li onClick={() => Navigate("/admin/addEvent")} className="los">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="ic" />
              Event Post
            </li>
            <li onClick={() => Navigate("/admin/alluser")} className="los">
              <FontAwesomeIcon icon={faBookmark} className="ic" />
              Book Event
            </li>
            <li onClick={() => Navigate("/admin/catagary")} className="los">
              <FontAwesomeIcon icon={faWatchmanMonitoring} className="ic" />
              Post Catergary
            </li>

        </ul>
            <hr />
        <p className="cnt">Authantication</p>
        <ul className="linkse">
          <li onClick={() => Navigate("/admin/alluser")} className="los">
            <FontAwesomeIcon icon={faOpensuse} className="ic" />
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
          <ul className="pidl">
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
