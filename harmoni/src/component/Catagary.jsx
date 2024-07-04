import React, { useState } from "react";
import "../Css/Catagary.css";
import "../Css/Addevent.css";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

export default function Catagary() {
  const [file, setFile] = useState("");
  const [cata, setCat] = useState("");

  const PostBtn = async (e) => {
    e.preventDefault();
    const data = { file, cata };
    axios
      .post(`http://localhost:3046/api/v1/admin/addevent`, data)
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
      <div className="onetwo">
        <div className="folms">
          <p className="roundfg">
            <FontAwesomeIcon icon={faLock} className="locks" />
            <p className="poste">Post Event</p>
          </p>
          <div className="fileblue">
            <input type="file"></input>
            <p>Chose Pics</p>
          </div>

          <input
            type="text"
            placeholder="Catagary name"
            id="olala"
            className="inpuvb"
          ></input>

          <button className="btny">Post</button>
        </div>

        <div className="allu2">
          <li className="blackindex2">
            <li>No</li>
            <li>image</li>
            <li>Name</li>
            <li>Action</li>
          </li>
          <ul className="users">
            <li>1</li>
            <li className="roun">
              <img src="/img/boy.png" className="roun" />
            </li>
            <li>Prince</li>
            <li>
              <FontAwesomeIcon icon={faMessage} />
              <FontAwesomeIcon icon={faDeleteLeft} />
            </li>
          </ul>
          <ul className="users">
            <li>2</li>
            <li className="roun">
              <img src="/img/boy.png" className="roun" />
            </li>
            <li>Prince</li>
            <li>
              <FontAwesomeIcon icon={faMessage} />
              <FontAwesomeIcon icon={faDeleteLeft} />
            </li>
          </ul>
          <ul className="users">
            <li>3</li>
            <li className="roun">
              <img src="/img/boy.png" className="roun" />
            </li>
            <li>Prince</li>
            <li>
              <FontAwesomeIcon icon={faMessage} />
              <FontAwesomeIcon icon={faDeleteLeft} />
            </li>
          </ul>
          <ul className="users">
            <li>4</li>
            <li className="roun">
              <img src="/img/boy.png" className="roun" />
            </li>
            <li>Prince</li>
            <li>
              <FontAwesomeIcon icon={faMessage} />
              <FontAwesomeIcon icon={faDeleteLeft} />
            </li>
          </ul>
          <ul className="users">
            <li>5</li>
            <li className="roun">
              <img src="/img/boy.png" className="roun" />
            </li>
            <li>Prince</li>
            <li>
              <FontAwesomeIcon icon={faMessage} />
              <FontAwesomeIcon icon={faDeleteLeft} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
