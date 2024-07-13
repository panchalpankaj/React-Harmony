import React, { useState } from "react";
import Navbar from "../Navbar";
import ImageText from "../PropsImagetextfront";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Changepass() {

  const [password,setPass] = useState()
  const [newPassword,setnewPass] = useState()

  const tokan = sessionStorage.getItem(`accessToken`)

  const fd = new FormData();
  fd.append('password',password)
  fd.append('newPassword',newPassword)
  // console.log(fd);

  const change = async(e)=>{
    e.preventDefault(); 
    
    await axios.post(`http://localhost:3046/api/v1/users/passwordChange`,fd,{
      headers: {
        Authorization:tokan
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    
  }


  return (
    <div>
      <Navbar />
      <ImageText
        first={"Contact Us Now"}
        sec={"KEEP"}
        third={"IN TOUCH"}
        forth={"Home"}
        fifth={"Contect Us"}
      />
      <div className="flex justify-center items-center bg-slate-900 h-auto">
        <div className="flex flex-col justify-center bg-gray-200 w-1/4 rounded-lg mt-3 items-center pt-3 pb-4 mb-20">
        <div className="bg-purple-500 size-10 rounded-full flex justify-center">
          <FontAwesomeIcon
            icon={faLock}
            className=" text-white pt-2 size-5"
          />
          </div>
          <p className="font-semibold">Change Password</p>
          <div>
            <label className="ml-0 mt-3 flex items-start">
              Current Password
            </label>
            <input
              type="password"
              placeholder="Password*"
              className="p-1 pl-10 border-2 rounded-md"
              value={password}
              onChange={(e)=>setPass(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="ml-0 mt-3 flex items-start">New Password</label>
            <input
              type="password"
              placeholder="Password*"
              className="p-1 border-2 rounded-md"
              value={newPassword}
              onChange={(e) => setnewPass(e.target.value)}
            ></input>
          </div>
          <button type="button" className="bg-blue-500 text-white font-semibold rounded-md p-1 mt-3 hover:bg-green-500 transition duration-500 px-5" onClick={change}>Change</button>
        </div>
      </div>
    </div>
  );
}

export default Changepass;
