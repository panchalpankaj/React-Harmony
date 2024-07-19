import React from "react";
import "../Css/eve.css";
import Foter from "../component/Foter";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Eve() {
  const { state: events } = useLocation();

  const tokan = sessionStorage.getItem(`accessToken`);
  console.log(tokan);

  const userId = sessionStorage.getItem(`UserID`);
  console.log(userId, "userID");

  const event_id = events._id;
  console.log(event_id, "EventID");

  const book = async (e) => {
    e.preventDefault();
    const data = {event_id};
    await axios
      .post(`http://localhost:3046/api/v1/users/booking`,data,
        {
          headers: {
            Authorization: tokan,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      {events && (
        <div class="card mb-0 bg-slate-400 italic font-semibold">
          <img src={events.image} class="card-img-top" alt="..." />
          <div class="card-body ">
            <div className="cont-txt ">
              <div>
                <div className="txtui">{events.description}</div>
                <p>
                  {events.location} | {events.title} | {events.s_date} |{events.e_date}
                </p>
              </div>

              <button
                className="eve-btn rounded-md bg-green-600 text-white hover:bg-green-700 transition duration-200"
                onClick={book}
              >
                Book
              </button>
            </div>
          </div>
          <p className="adrdat">
            {events.e_date} | ⚲ {events.location} |{" "}
            <span className="bol">${events.price} onWord</span>
          </p>
        </div>
      )}
      <Foter />
    </div>
  );
}
