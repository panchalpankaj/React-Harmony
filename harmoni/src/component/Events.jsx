import React, { useEffect, useState } from "react";
import "../Css/Event.css";
import Foter from "./Foter.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import axios from "axios";

export default function Events() {
  const [userData, setUserData] = useState([]);
  const token = sessionStorage.getItem(`accessToken`);
  useEffect(() => {
    axios
      .get(`http://localhost:3046/api/v1/admin/showcategory`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.message);
        setUserData(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Navigater = useNavigate("");
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="about-first2">
        <img src="/img/mountai-view.jpg" className="about-img" />
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-5 events">
        {userData.map((user) => (
          <div class="col">
            <div class="card">
              <img src={user.URL} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <ul className="llm">
                    <li
                      className="linked cursor-pointer"
                      onClick={() => Navigater("/Events/eventes" , { state : user} ) }
                    >
                      {user.category_name}
                    </li>
                  </ul>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Foter />
    </div>
  );
}










