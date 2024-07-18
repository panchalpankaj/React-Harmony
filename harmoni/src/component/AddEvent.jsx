import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../Css/Addevent.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddEvent() {
  const [title, setTitle] = useState("");
  const [s_date, setS_date] = useState("");
  const [e_date, setE_date] = useState("");
  const [s_time, setS_time] = useState("");
  const [e_time, setE_time] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState({ name: "", id: "" });
  const [image, setImgs] = useState("");
  const [userData, setUserData] = useState([]);

  const token = sessionStorage.getItem("accessToken");

  const fd = new FormData();
  fd.append("title", title);
  fd.append("s_date", s_date);
  fd.append("e_date", e_date);
  fd.append("s_time", s_time);
  fd.append("e_time", e_time);
  fd.append("location", location);
  fd.append("description", description);
  fd.append("category_name", category.name);
  fd.append("category_id", category.id);
  fd.append("image", image);

  const Postbtn = async () => {
    await axios
      .post(`http://localhost:3046/api/v1/admin/addevent`, fd, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3046/api/v1/admin/showcategory`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUserData(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            onChange={(e) => setImgs(e.target.files[0])}
          ></input>
          <p>Choose Pics</p>
        </div>
        <input
          type="text"
          placeholder="Title"
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
        <select
          className="form-select inpuvb"
          aria-label="Default select example"
          onChange={(e) => {
            const selectedCategory = userData.find(
              (user) => user.category_name === e.target.value
            );
            setCategory({
              name: selectedCategory.category_name,
              id: selectedCategory._id,
            });
          }}
        >
          {userData.map((user) => (
            <option key={user._id} value={user.category_name}>
              {user.category_name}
            </option>
          ))}
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
