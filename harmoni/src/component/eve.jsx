import React, { useEffect, useState } from "react";
import "../Css/eve.css";
import Foter from "../component/Foter";
import Navbar from "./Navbar";
import axios from "axios";


export default function Eve() {

const [userData,setUserData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3046/api/v1/admin/showallevents`)
    .then((res)=>{
      console.log(res.data.data)
      setUserData(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <Navbar/>
      {userData && (
      <div class="card mb-3">
        <img src={userData.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="cont-txt">
            <div>
              <div className="txtui">{userData.description}</div>
              <p>{userData.location} | {userData.title} | {userData.s_date} | {userData.e_date}</p>
            </div>

            <button className="eve-btn">Book</button>
          </div>
         
        </div>
        <p className="adrdat">{userData.e_date} | ⚲ {userData.location} | <span className="bol">${userData.price} onWord</span></p>
      </div>  
     )}
      <Foter />
    </div>
  );
}
