import React, { useEffect, useState } from "react";
import "../Css/Eventes.css";
import Foter from "./Foter.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import axios from "axios";

export default function Eventes() {
  const [userData, setuserData] = useState();
  const {state } = useLocation();

  console.log(state._id , "state")
  

  const Navigator = useNavigate();

  useEffect(() => {
    const data = {category_id : state._id}
    axios
    .post(`http://localhost:3046/api/v1/admin/showeventsbycategory` , data)
      .then((res) => {
        setuserData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(userData)

  return (
    <div>
      <Navbar />
      <div className="about-first2">
        <img src="/img/mountai-view.jpg" className="about-img" />
      </div>

     {userData?.map((user) => (
        <div class="cardy flex flex-wrap flex-row">
          <img src={user?.image} class="card-img-top" alt="..." />
          <div class="card-body ">
            <p class="card-text">
              <ul className="llm cursor-pointer">
                <li
                  onClick={() => {
                    Navigator("/Events/eventes/eve" , {state : user});
                  }}
                >
                  Click Hear For Boking
                </li>
              </ul>
            </p>
            <p className="addr">
              {user?.description}
              <br />
              {user?.location}
              <br />₹{user?.price} onword
            </p>
          </div>
        </div>
      ))} 
      <Foter />
    </div>
  );
}


