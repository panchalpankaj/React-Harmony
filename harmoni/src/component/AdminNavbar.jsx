import React from "react";
import "../Css/AdminNavbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEnvelopeOpen,
  faListAlt,
} from "@fortawesome/free-regular-svg-icons";
import {
  faOpensuse,
  faWatchmanMonitoring,
} from "@fortawesome/free-brands-svg-icons";
export default function AdminNavbar() {
  const Navigate = useNavigate("");
  return (
    <div className="hola">
      <div className="leftNav">
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
        </div>
        <hr />
        <p className="cnt">Authantication</p>
        <ul className="linkse">
          <li onClick={() => Navigate("/admin/alluser")} className="los">
            <FontAwesomeIcon icon={faOpensuse} className="ic" />
            Log out
          </li>
        </ul>
      </div>

      <div className="hor-nav">
        <h3>Admin</h3>
        <h5 className="jfry">
          <ul className="pidl">
            <li
              className="roun"
              onClick={() => Navigate("/admin/profile")}
            >  <li className='roun'><img src='/img/boy.png' className='roun'/></li></li>
          </ul>
          Event Managment <br />
          Admin
        </h5>
      </div>
    </div>
  );
}
