import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../Css/Addevent.css";
import axios from "axios";

export default function AddEvent() {
  const [title, setTitle] = useState("");
  const [s_date, setS_date] = useState("");
  const [e_date, setE_date] = useState("");
  const [s_time, setS_time] = useState("");
  const [e_time, setE_time] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [cat_id, set_id] = useState("");
  const [cat_name, setCat_name] = useState("");
  const [imgs, setImgs] = useState("");

  const Postbtn = async (e) => {
    e.preventDefault();
    const Data = {
      title,
      s_date,
      e_date,
      s_time,
      e_time,
      location,
      desc,
      cat_id,
      cat_name,
      imgs,
    };

    axios
      .post(`http://localhost:3046/api/v1/admin/addevent`, Data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="folms border-2 border-gray-400 p-4">
        <p className="roundfg">
          <FontAwesomeIcon icon={faLock} className="locks" />
          <p className="poste">Post Event</p>
        </p>
        <div className="fileblue">
          <input
            type="file"
            value={imgs}
            onChange={(e) => setImgs(e.target.value)}
          ></input>
          <p>Chose Pics</p>
        </div>

        <input
          type="text"
          placeholder="title"
          className="inpuvb"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="date"
          className="inpuvb"
          value={s_date}
          onChange={(e) => setS_date(e.target.value)}
        ></input>
        <input
          type="date"
          className="inpuvb"
          value={e_date}
          onChange={(e) => setE_date(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="--:--"
          className="inpuvb"
          value={s_time}
          onChange={(e) => setS_time(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="--:--"
          className="inpuvb"
          value={e_time}
          onChange={(e) => setE_time(e.target.value)}
        ></input>
        {/* <input type="text" placeholder="Price" className="inpuvb"></input> */}
        <select
          className="form-select inpuvb"
          aria-label="Default select example"
          value={cat_name}
          onChange={(e) => setCat_name(e.target.value)}
        >
          <option selected   value={cat_name}
          onChange={(e) => setCat_name(e.target.value)}>Select Catagary</option>
          <option value="1" >One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          className="inpuvb"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <textarea
          rows={6}
          cols={40}
          placeholder="Description"
          className="border-gray-300 border-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="btny" onClick={Postbtn}>
          Post
        </button>
      </div>
    </div>
  );
}
