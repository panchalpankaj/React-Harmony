import React, { useState } from "react";
import "../Css/Navbar.css";
import { useNavigate } from "react-router-dom";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate("");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavigation = (path) => {
    setMenuVisible(false); 
    navigate(path);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/img/logo.png" alt="Logo" className=" mr-5 h-12 w-60 " />
        </div>
        <div className={`menu ${menuVisible ? "menu-visible" : ""}`}>
          <ul className="menu-ul">
            <li className="menu-li" onClick={() => handleNavigation("/")}>
              HOME
            </li>
            <li className="menu-li" onClick={() => handleNavigation("/About")}>
              ABOUT
            </li>
            <li className="menu-li" onClick={() => handleNavigation("/Events")}>
              EVENTS
            </li>
            <li className="menu-li" onClick={() => handleNavigation("/Gallery")}>
              GALLERY
            </li>
            <li className="menu-li" onClick={() => handleNavigation("/Contact")}>
              CONTACT
            </li>
          </ul>
        </div>
<div className="asdfg">
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars}/>
        </div>

        <div className="Button">
          <ul className="menu">
            <li className="menu-li" onClick={() => handleNavigation("/Signin")}>
              <button type="button" className="nav-btn bg-yellow-400 text-gray-700 hover:bg-yellow-200">
                Sign In
              </button>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}

