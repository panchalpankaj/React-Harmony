import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

function Allmessage() {
    const [message,setMessage] = useState([]);


  const tokan = sessionStorage.getItem(`accessToken`);


  useEffect(() => {
    axios
      .get(`http://localhost:3046/api/v1/contact/allmessage`, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setMessage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });


  return (
    <>
      <div>
        <AdminNavbar />
        <div className="allu ml-64 bg-slate-900 h-screen">
    <div className="flex justify-around  mb-5 flex-wrap">
          { message.map((data) => (
          <div className="bg-gray-300 w-2/5 flex gap-1 justify-around rounded-lg p-3 mt-5">
            <div className="flex flex-col justify-center ml-2">
              <div>
                <p>Full Name</p>
                <p className="text-orange-500">{data.fullName}</p>
              </div>
              <div>
                <p>Message</p>
                <p className="text-orange-500">{data.message}</p>
              </div>
             
            </div>

            <div className="flex flex-col justify-center mr-1">
              <div>
                <p>Email</p>
                <p className="text-orange-500">{data.email}</p>
              </div>
              <div>
                <p>Mobile No</p>
                <p className="text-orange-500">{data.mobile_no}</p>
              </div>
             
            </div>
          </div>

)) }
</div>
        </div>
      </div>
    </>
  );
}

export default Allmessage;
