import React, { useState } from "react";
import "../Css/Contact.css";
import Foter from "./Foter.jsx";
import Navbar from "./Navbar.jsx";
import Imagetextfront from "./PropsImagetextfront.jsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [message, setMessage] = useState("");

  const send = async (e) => {
    e.preventDefault();  
    const data = { fullName, email, mobile_no, message };
    axios
      .post(`http://localhost:3046/api/v1/contact/sendmessage`, data)
      .then((res) => {
        if(res.data.success == true)
        {
        console.log(res);
        toast.success(res.data.message)
        }
        else{
          toast.error(res.data.message)
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Navbar />
      {/* use Props */}
      <Imagetextfront
        first={"CONTACT US NOW"}
        sec={"KEEP"}
        third={"IN TOUCH"}
        forth={"Home"}
        fifth={"CONTACT US"}
      />
      <div className="img-contact">
        <img src="./img/cont.jpeg" className="cont-img"></img>
        <div className="formse">
          <h3 className="tit">Contact Us</h3>
          <input
            type="text"
            placeholder="name*"
            className="input-txtyu"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
          <input type="text" placeholder="email*" className="input-txtyu" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="phone Number*"
            className="input-txtyu"
            value={mobile_no}
            onChange={(e) => setmobile_no(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Enter Message"
            rows={5}
            className="input-txtyu2 pt-1 pl-6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btne" onClick={send}>
            SEND
          </button>
        </div>
      </div>

      <div className="maps-in-Contact">
        <p className="locy">★★ Your Location ★★</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223385.9875093359!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1719116285270!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mapse"
        />
      </div>

      <Foter />
    </div>
  );
}
