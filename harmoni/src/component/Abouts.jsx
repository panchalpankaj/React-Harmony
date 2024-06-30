import React from "react";
import "../Css/About.css";
import Foter from "./Foter.jsx";
import Navbar from "./Navbar";
import Imagetextfront from "./PropsImagetextfront.jsx";
export default function Abouts() {
  return (
    <>
    <Navbar/>
      <div className="about-first">

        <Imagetextfront first="ALL YOU NEED TO KNOW" sec="ABOUT" third="HARMONEY" forth="Home" fifth="About Us"/>

        <div className="about-first-textes">
          <div className="abou">
            <p className="abou1">We are harmoni</p>
            <h2 className="abou2">
              No.1 Event <br /> Managment
            </h2>
            <p className="abou3">get Started!</p>
          </div>

          <div className="abou">
            <p className="abou4">Our mission</p>
            <p className="bor"></p>
            <h2 className="abou5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              est, magnam quas quod amet ad aliquid autem beatae debitis
              molestias necessitatibus incidunt voluptas recusandae voluptatem.
            </h2>
            <p className="abou6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              est. Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="abou">
            <p className="abou4">our vission</p>
            <p className="bor"></p>
            <h2 className="abou5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              qui neque temporibus! Ut soluta aut velit perferendis, placeat,
              aliquid ex nam inventore culpa debitis quos.
            </h2>
            <p className="abou6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              obcaecati ratione ipsam officiis, eius deserunt minima eligendi.
            </p>
          </div>
        </div>

        <div className="img-tx">
          <div className="img-se">
            <img src="/img/abou-img.png" className="img-secer"></img>
          </div>
          <div className="texts-area" >
            <p style={{opacity:0.2}}>Lorem, ipsum.</p>
            <h2 style={{opacity:0.2}}>Our Winning Awards</h2>
            <div className="dat-txt">
            <div className="dateses">
                <p className="ddy">AUG 2015</p>
                <p className="ddx">MAY 2014</p>
                <p className="ddz">DEC 2013</p>
                <p className="vod"></p>
              </div>
              <div className="only-txt">
                <h3 className="txttts">Lorem ipsum dolor sit amet.</h3>
                <p className="tttyy">Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</p>

                <h3 className="txtttt">Lorem ipsum dolor sit amet.</h3>
                <p className="tttyy">Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</p>

                <h3 className="txtttt">Lorem ipsum dolor sit amet.</h3>
                <p className="tttyy">Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
          </div>
        </div>

      <div className="eight-box">
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
        <div className="boxy1">
          <p className="eight-p">Stusy with us</p>
          <p className="eight-pp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet adipisci quisquam voluptatibus aut neque.</p>
        </div>
      
      </div>
    <Foter/>
      </div>
    </>
  );
}
