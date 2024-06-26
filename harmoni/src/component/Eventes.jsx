import React from "react";
import "../Css/Eventes.css";
import Foter from "./Foter.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
export default function Eventes() {
    const Navigator = useNavigate('');
  return (
    <div>
      <Navbar/>
      <div className="about-first2">
        <img src="/img/mountai-view.jpg" className="about-img" />
      </div>

      <div class="cardy">
        <img src="/img/man.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            <ul className="llm">
                <li onClick={() => {Navigator('/Events/eventes/eve')}}>Click Hear For Boking</li>
            </ul>
            
          </p>
          <p className="addr">Surat<br/>ABC<br/>₹200 OnWard</p>
        </div>
      </div>
      <Foter />
    </div>
  );
}
