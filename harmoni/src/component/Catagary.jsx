import React, { useEffect, useState } from "react";
import "../Css/Catagary.css";
import "../Css/Addevent.css";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

export default function Catagary() {
  const [category_name, setCatname] = useState("");
  const [URL, setUrl] = useState("");
  const [userData, setUserData] = useState([]);

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
        console.log(res);
        if(res.data.success == true)
        {
          toast.success(res.data.message)
        }
        else{
          toast.error(res.data.message)
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3046/api/v1/admin/showcategory", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.message);
        setUserData(res.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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

        <div className="allu2">
          <li className="blackindex2">
            <li>No</li>
            <li>image</li>
            <li>Name</li>
            <li>Action</li>
          </li>

          {userData.map((user, index) => (
            <ul className="users">
              <li>{index + 1}</li>
              <li className="roun">
                <img src={user.URL} className="roun" />
              </li>
              <li>{user.category_name}</li>
              <li>
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faDeleteLeft} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
