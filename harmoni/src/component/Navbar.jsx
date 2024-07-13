import React, { useEffect, useState } from "react";
import "../Css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userData, setuserData] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [logout,setLogout] = useState('');

  const Navigate = useNavigate('');
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const tokan = sessionStorage.getItem('accessToken');
  // console.log(tokan)

  useEffect(() => {
    axios
      .get(`http://localhost:3046/api/v1/users/getcurrentUser`, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setuserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Logout = async(e) => {
    e.preventDefault(); 

   await axios.post(`http://localhost:3046/api/v1/users/logout`,{
      headers: {
        Authorization: tokan,
      }

    })
    .then((res) => {
      console.log(res)
      sessionStorage.removeItem('accessToken');
      Navigate('/');
    })
    .catch((err) => {
      console.log(err)
    })

   
  }


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

        {userData ? (
          <div className="text-xl p-2 mr-3 flex relative">
            <img
              src={userData.avatar}
              className="size-10 rounded-full mr-2 cursor-pointer"
              onClick={toggleDropdown}
            ></img>
            <div className="cursor-pointer" onClick={toggleDropdown}>
              {userData.fullName}
            </div>
            {dropdownVisible && (
              <div className="absolute top-full right-0 bg-white shadow-lg rounded-md mt-2 w-48">
                <ul className="py-2">
                  <li className="px-4 py-2 bg-gray-800 cursor-pointer hover:bg-green-500 transition duration-500">
                   <Link to = {'/Account'}>Account</Link> 
                  </li>
                  <li className="px-4 py-2 bg-gray-800 cursor-pointer hover:bg-green-500 transition duration-700">
                     <Link to={'/mybooking'}>Booking</Link>
                  </li>
                  <li className="px-4 py-2 bg-gray-800 cursor-pointer hover:bg-red-600 transition duration-300">
                 <button onClick={Logout}>Logout</button>   
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="asdfg">
            <div className="hamburger" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="Button">
              <ul className="menu">
                <li className="menu-li">
                  <Link to={"/Signin"}>
                    <button
                      type="button"
                      className="nav-btn bg-yellow-400 text-gray-700 hover:bg-yellow-200"
                    >
                      Sign In
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
