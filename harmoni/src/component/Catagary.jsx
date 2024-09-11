import React, { useEffect, useState } from "react";
import "../Css/Catagary.css";
import "../Css/Addevent.css";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import axios from "axios";

export default function Catagary() {
  const [category_name, setCatname] = useState("");
  const [URL, setUrl] = useState("");

  const token = sessionStorage.getItem("accessToken");
  // console.log(token)

  const fd = new FormData();
  fd.append("category_name", category_name);
  fd.append("URL", URL);

  const postCat = async () => {
    await axios
      .post(`http://localhost:3046/api/v1/admin/addcategory`, fd, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.success == true) {
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
      <AdminNavbar />
      <div className="onetwo">
        <div className="folms">
          <p className="roundfg">
            <FontAwesomeIcon icon={faLock} className="locks" />
            <p className="poste">Post Catagary</p>
          </p>
          <div className="fileblue">
            <input
              type="file"
              onChange={(e) => setUrl(e.target.files[0])}
            ></input>
            <p>Chose Pics</p>
          </div>

          <input
            value={category_name}
            onChange={(e) => setCatname(e.target.value)}
            type="text"
            placeholder="Catagary name"
            id="olala"
            className="inpuvb"
          ></input>

          <button onClick={postCat} className="btny">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
