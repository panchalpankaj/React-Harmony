import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Changedetail() {
  const [userData, setuserData] = useState({});

  const [fullName,setFullname] = useState()
  const [email,setEmail] = useState();
  const [gender,setgender] = useState();

  const fd = new FormData();
  fd.append('fullName',fullName)
  fd.append('email',email)
  fd.append('gender',gender)

  const tokan = sessionStorage.getItem(`accessToken`);

  useEffect(() => {
    axios
      .get(`http://localhost:3046/api/v1/users/getcurrentUser`, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        // console.log(res.data.data)
        setuserData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  const change = async(e) => {
    e.preventDefault();
    axios.post(`http://localhost:3046/api/v1/users/update`,fd,{
      headers:{
        Authorization:tokan
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })

  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center z-0 bg-slate-950 h-screen">
        <div className="z-10 flex flex-col justify-center items-center bg-gray-400 w-1/3 pt-1 mt-5 rounded-lg">
          <div className="bg-purple-400 rounded-full size-10 flex  justify-center">
            <FontAwesomeIcon
              icon={faLock}
              className="text-white size-5 mt-2 flex text-center items-center"
            />
          </div>
          <p className="text-white font-semibold text-lg">Change user Detail</p>

          <div className="flex flex-col text-white gap-2 mt-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="full Name"
              className="p-2 rounded-sm text-black"
              value={userData.fullName}
              onChange={(e) => setFullname(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col text-white gap-2 mt-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              className="p-2 rounded-sm text-black"
              value={userData.email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col text-white gap-2 mt-2">
            <label>Gender</label>
            <div className="flex gap-3">
              <label>
                <input type="radio" name="Gender" value={userData.gender} onChange={(e) => setgender(e.target.value)}/>
                Male
              </label>
              <label>
                <input type="radio" name="Gender" value={userData.gender} onChange={(e) => setgender(e.target.value)}/>
                Female
              </label>
              <label>
                <input type="radio" name="Gender" value={userData.gender} onChange={(e) => setgender(e.target.value)}/>
                Other
              </label>
            </div>
          </div>
          <div className="flex flex-col text-white gap-2 mt-2">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Number"
              className="p-2 rounded-sm text-black"
              value={userData.mobile_no}
            ></input>
          </div>
          <div className="flex flex-col text-white  mt-2">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white font-semibold rounded-md p-1 mt-3 hover:bg-green-500 transition duration-500 px-5 mb-5"
            onClick={change}
          >
            Change
          </button>

          <p className="text-white font-semibold mb-3">
            Copyright © Your Website 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Changedetail;
