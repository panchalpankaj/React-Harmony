import React from "react";
import "../Css/eve.css";
import Foter from "../component/Foter";
import Navbar from "./Navbar";

export default function eve() {
  return (
    <div>
      <Navbar/>
      <div class="card mb-3">
        <img src="/img/eve.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="cont-txt">
            <div>
              <div className="txtui">Lorem, ipsum dolor.</div>
              <p>Abc | Hindi | 2024 | 1/1/1/2526</p>
            </div>

            <button className="eve-btn">Book</button>
          </div>
         
        </div>
      </div>
        <p className="adrdat">2024-2-20 | ⚲ Ahmedabad | <span className="bol">$200 onWord</span></p>
      <Foter />
    </div>
  );
}
