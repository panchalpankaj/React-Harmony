import React from "react";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../Css/Addevent.css";

export default function AddEvent() {
  return (
    <div>
      <AdminNavbar />
      <div className="folms">
        <p className="roundfg">
          <FontAwesomeIcon icon={faLock} className="locks" />
          <p className="poste">Post Event</p>
        </p>
        <div className="fileblue">
          <input type="file"></input>
          <p>Chose Pics</p>
        </div>

        <input type="text" placeholder="title" className="inpuvb"></input>
        <input type="date" className="inpuvb"></input>
        <input type="date" className="inpuvb"></input>
        <input type="text" placeholder="--:--" className="inpuvb"></input>
        <input type="text" placeholder="--:--" className="inpuvb"></input>
        <input type="text" placeholder="Price" className="inpuvb"></input>
        <select className="form-select inpuvb" aria-label="Default select example">
          <option selected>Select Catagary</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input type="text" placeholder="Location" className="inpuvb"></input>
        <textarea rows={6} cols={40} placeholder="Description"/>
        <button className="btny">Post</button>
      </div>
    </div>
  );
}
