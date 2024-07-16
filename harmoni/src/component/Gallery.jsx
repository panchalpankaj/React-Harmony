import React from "react";
import "../Css/Gallery.css";
import Foter from "./Foter.jsx";
import "../Css/Contact.css";
import Navbar from "./Navbar.jsx";
import Imagetextfront from "./PropsImagetextfront.jsx";
export default function Gallery() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      
      <Imagetextfront first="HARMONI EVENTS" sec={"HARMONI"} third={"GALLERY"} forth={"Harmoni"} fifth={"Gallery"}/>
      <div className="jsta">
        <div className="og">
          ------<span className="strs">★★ </span>Our Gallery{" "}
          <span className="strs">★★ </span>------
        </div>
      </div>
      <div className="img-gal">
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gal_1.jpg" className="imger1" alt="" />
            <div className="overlay title-overlay">
              <div className="text"><span className="lef">hill there <br/> shall there </span></div>
              <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gel_2.webp" className="imger1" alt="" />
            <div className="overlay title-overlay">
            <div className="text"><span className="lef">hill there <br/> shall there </span></div>
              <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gel_3.jpg" className="imger2" alt="" />
            <div className="overlay title-overlay">
            <div className="text"><span className="lef">hill there <br/> shall there </span></div>
              <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gel_4.jpg" className="imger2" alt="" />
            <div className="overlay title-overlay">
            <div className="text"><span className="lef">hill there <br/> shall there </span></div>
            <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gel_5.jpg" className="imger1" alt="" />
            <div className="overlay title-overlay">
            <div className="text"><span className="lef">hill there <br/> shall there </span></div>
            <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gel_6.jpg" className="imger1" alt="" />
            <div className="overlay title-overlay">
            <div className="text"><span className="lef">hill there <br/> shall there </span></div>
            <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gel_7.webp" className="imger2" alt="" />
            <div className="overlay title-overlay">
            <div className="text"><span className="lef">hill there <br/> shall there </span></div>
            <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
        <div className="img-g1">
          <div className="item animated wow fadeIn">
            <img src="./img/gel_8.webp" className="imger2" alt="" />
            <div className="overlay title-overlay">
            <div className="text"><span className="lef">hill there <br/> shall there </span></div>
            <div className="text"><span className="lef">@</span></div>
            </div>
          </div>
        </div>   
      </div>

      <div className="maps-in-Contact">
        <p className="locy">★★ Your Location ★★</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223385.9875093359!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1719116285270!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mapse"/>
      </div>

      <div className="img-tex-bt">
        <img src="./img/gal_bac.jpg" className="ba-im"/>
        <div className="tx-b">
          <h3 className="distx">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
          <button type="button" className="bbbb">Make An Event Now</button>
        </div>
      </div>
      <Foter />
    </div>
  );
}
