import React from "react";
import "../Css/Contact.css";
import Foter from "./Foter.jsx";
import Navbar from "./Navbar.jsx";

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div className="about-first2">
        <img src="/img/mountai-view.jpg" className="about-img" />

        <div className="textes">
          <p className="img-text">CONTACT US NOW</p>
          <p className="img-text2">KEEP</p>
          <p className="img-text3">IN TOUCH</p>
        </div>
        <div className="textes2">
          <p className="img-text4">Home</p>
          <p className="img-text5">CONTACT US</p>
        </div>
      </div>

      <div className="img-contact">
        <img src="./img/cont.jpeg" className="cont-img"></img>
        <div className="formse">
          <h3 className="tit">Contact Us</h3>
          <input type="text" placeholder="name*" className="input-txtyu" />
          <input type="text" placeholder="email*" className="input-txtyu" />
          <input type="text" placeholder="country*" className="input-txtyu" />
          <input
            type="text"
            placeholder="phone Number*"
            className="input-txtyu"
          />
          <input type="text" placeholder="password*" className="input-txtyu" />
          <button className="btne">SEND</button>
        </div>
      </div>

      <div className="maps-in-Contact">
        <p className="locy">★★ Your Location ★★</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223385.9875093359!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1719116285270!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mapse"/>
      </div>

      <Foter />
    </div>
  );
}
