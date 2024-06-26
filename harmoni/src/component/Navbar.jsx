import React, { Fragment } from "react";
import "../Css/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigater = useNavigate("");

  return (
    <>
      <div className="navbar">
        <div className="logo">
        <img src="/img/logo.png" alt="Logo" className="navbar-logo" />
         
        </div>
        <div className="menu">
            <ul className="menu-ul">
                <li className="menu-li" onClick={() => navigater('/')}>HOME</li>
                <li className="menu-li" onClick={() => navigater('/About')}>ABOUT</li>
                <li className="menu-li" onClick={() => navigater('/Events')}>EVENTS</li>
                <li className="menu-li" onClick={() => navigater('/Gallery')}>GALLERY</li>
                <li className="menu-li" onClick={() => navigater('/Contact')}>CONTACT</li>
            </ul>
        </div>
        <div className="Button">
          <ul className="menu">
                <li className="menu-li" onClick={() => navigater('/Signin')}><button type="button" className="nav-btn">Sign In</button></li>
                </ul>
          
        </div>
      </div>
    </>
  );
}
