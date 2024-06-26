import React from "react";
import "../Css/Event.css";
import Foter from "./Foter.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function Events() {
  const Navigater = useNavigate("");
  return (
    <div>
      <Navbar/>
      <div className="about-first2">
        <img src="/img/mountai-view.jpg" className="about-img" />
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-5 events">
        <div class="col">
          <div class="card">
            <img src="./img/gel_5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                <ul className="llm">
                  <li className="linked" onClick={() => Navigater("/Events/eventes")}>Click Hear</li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="./img/gel_4.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Navratri</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="./img/gel_3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Halowin</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="./img/gel_2.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Stand up Comedy</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="./img/gel_5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Diwali</h5>
            </div>
          </div>
        </div>
      </div>

      <Foter />
    </div>
  );
}
