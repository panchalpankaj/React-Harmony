import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

function Myboking() {
  const [userData, setUserData] = useState([]);

  const tokan = sessionStorage.getItem(`accessToken`);
  // console.log(tokan)

  useEffect(() => {
    axios
      .get(`http://localhost:3046/api/v1/users/getbooking`, {
        headers: {
          Authorization: tokan,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div >
      <Navbar />
      <div className="bg-slate-900 h-full">
        <div className="flex flex-wrap gap-4 justify-around pt-5">

          {userData.map((user, index) => (
            <div
              className="bg-gray-300 w-2/5 flex gap-1 justify-between rounded-lg"
              key={index + 1}
            >
              <div className="flex flex-col justify-center">
                <img
                  src="https://media.istockphoto.com/id/1638392085/photo/green-trees-shaped-like-qr-code.jpg?s=2048x2048&w=is&k=20&c=9OSmfFsUw94Xic5l6yhV_xljbdsskBLBhozykd9C0DY="
                  className="size-40"
                />
                <button type="button" className="text-white bg-blue-600 ">
                  Download
                </button>
              </div>
              <div className="flex flex-col justify-center ml-2">
                <div>
                  <p>Ticket Id</p>
                  <p className="text-blue-500">{user?._id}</p>
                </div>
                <div>
                  <p>Location</p>
                  <p className="text-blue-500">{user?.event_id?.location}</p>
                </div>
                <div>
                  <p>Price:</p>
                  <p className="text-blue-500">{user?.event_id?.price}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center mr-1">
                <div>
                  <p>Date & Time</p>
                  <p className="text-blue-500">{user?.event_id?.s_time}</p>
                </div>
                <div>
                  <p>Boking Date:</p>
                  <p className="text-blue-500">{user?.event_id?.s_date}</p>
                </div>
                <div>
                  <p>Title:</p>
                  <p className="text-blue-500">{user?.event_id?.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myboking;
