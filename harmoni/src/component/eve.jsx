import React, { useEffect, useState } from "react";
import "../Css/eve.css";
import Foter from "../component/Foter";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function Eve() {
 
  const { state : user} = useLocation();


  return (
    <div>
      <Navbar />
      {user && (
        <div class="card mb-3">
          <img src={user.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="cont-txt">
              <div>
                <div className="txtui">{user.description}</div>
                <p>
                  {user.location} | {user.title} | {user.s_date} |
                  {user.e_date}
                </p>
              </div>

              <button className="eve-btn rounded-md hover:bg-orange-700 transition duration-100">Book</button>
            </div>
          </div>
          <p className="adrdat">
            {user.e_date} | ⚲ {user.location} |{" "}
            <span className="bol">${user.price} onWord</span>
          </p>
        </div>
      )}
      <Foter />
    </div>
  );
}
