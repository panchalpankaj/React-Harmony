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
  const [description, setDesc] = useState("");
  const [category_id, set_id] = useState("");
  const [category_name, setCat_name] = useState("");
  const [image, setImgs] = useState("");


  const tokan = sessionStorage.getItem('accessToken')
  console.log(tokan);


  const fd = new FormData()
  fd.append("title",title)
  fd.append("s_data",s_date)
  fd.append("e_data",e_date)
  fd.append("s_time",s_time)
  fd.append("e_time",e_time)
  fd.append("location",location)
  fd.append("description",description)
  fd.append("category_id",category_id)
  fd.append("category_name",category_name)
  fd.append("image",image)


  const Postbtn = async() => {
    await axios.post(`http://localhost:3046/api/v1/admin/addevent` , fd , {
      headers : {
        Authorization : tokan
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
        console.log(e);
    })
  }
   

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
            onChange={(e)=>setImgs(e.target.files[0])}
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
          value={category_name}
          onChange={(e) => setCat_name(e.target.value)}
        >
          <option selected>Select Catagary</option>
          <option value={"one"} onChange={(e) => set_id(e.target.value)}>1</option>
          <option value={"two"} onChange={(e) => set_id(e.target.value)}>2</option>
          <option value={"three"}onChange={(e) => set_id(e.target.value)}>3</option>
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
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="btny" onClick={Postbtn}>
          Post
        </button>
      </div>
    </div>
  );
}
