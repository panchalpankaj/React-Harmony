import React, { useEffect, useState } from "react";
import "../Css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userData, setuserData] = useState({});

  const navigate = useNavigate("");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavigation = (path) => {
    setMenuVisible(false);
    navigate(path);
  };

  const tokan = sessionStorage.getItem(`accessToken`);

  useEffect(() => {
    axios
      .get(`http://localhost:3046/api/v1/users/getcurrentUser`, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        console.log(res);
        setuserData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/img/logo.png" alt="Logo" className=" mr-5 h-12 w-60 " />
        </div>
        <div className={`menu ${menuVisible ? "menu-visible" : ""}`}>
          <ul className="menu-ul">
            <li className="menu-li">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="menu-li">
              <Link to={"/About"}>ABOUT</Link>
            </li>
            <li className="menu-li">
              <Link to={"/Events"}>EVENTS</Link>
            </li>
            <li className="menu-li">
              <Link to={"/Gallery"}>GALLERY</Link>
            </li>
            <li className="menu-li">
              <Link to={"/Contact"}>CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="asdfg">
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="Button">
            <ul className="menu">
              <li className="menu-li">
                <button
                  type="button"
                  className="nav-btn bg-yellow-400 text-gray-700 hover:bg-yellow-200"
                >
                  <Link to={"/Signin"}>Sign In</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
