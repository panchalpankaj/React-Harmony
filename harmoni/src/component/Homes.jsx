import React from "react";
import "../Css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import {
  faAtlassian,
  faDropbox,
  faShopify,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

export default function Homes() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <img src="./img/night.jpg" alt="HomePage" className="homePageImg" />
        <h2 className="pp">
          One Stop Event <br /> Planner
        </h2>
        <p className="home-para size-3 font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum velit
          architecto maxime suscipit, maiores optio reiciendis nemo
          reprehenderit in tempore magnam commodi laborum itaque at voluptate ab
          quae modi quam minima illo quasi. Tempore aut similique reprehenderit
          rerum dolor ex fugiat ea cum quis optio. Dolorum doloribus eveniet
          reiciendis distinctio.
        </p>
        <p className="home-para2">
          LorDolorum doloribus eveniet reiciendis distinctio.
        </p>

        <input
          type="email"
          className="Home-input"
          placeholder="Your Email Adrees"
        />
        <button className="home-add">Get Started</button>

        <img src="./img/home-peple.png" className="peple-img" />
        <p className="img-txtese">
          16,00 pople request accese a visit last 24 hours
        </p>
      </div>

      <div className="part2">
        <div className="logoName">
          <ul className="part2-logo">
            <li>Google</li>
            <li>
              <FontAwesomeIcon icon={faSlack} />
              Slack
            </li>
            <li>
              <FontAwesomeIcon icon={faAtlassian} />
              Atlansian
            </li>
            <li>
              <FontAwesomeIcon icon={faDropbox} />
              Dropbox
            </li>
            <li>
              <FontAwesomeIcon icon={faShopify} />
              shopify
            </li>
          </ul>
        </div>

        <div className="text-boxes">
          <div className="text-box1">
            <p className="aa1">
              What is Harmoni
              <br />
              Event
            </p>
            <p className="aa2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              aliquam pariatur deleniti, necessitatibus incidunt iusto quidem
              sunt iste, aliquid autem itaque sequi enim! Culpa! Lorem ipsum
              dolor, sit amet consectetur adipisicing. Lorem, ipsum dolor sit
              amet consectetur adipisicing.
            </p>
          </div>
          <div className="text-box2">
            <p className="bb1">
              Your Event will be Bryond your
              <br />
              imagination
            </p>
            <p className="bb2">Explore the Library</p>
          </div>
          <div className="text-box3">
            <div className="b1">
              <p className="x1">Chatbots</p>
              <p className="x2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, beatae?
              </p>
            </div>
            <div className="b1">
              <p className="x1">knowledgebase</p>
              <p className="x2">
                Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. amet consectetur adipisicing elit. Voluptates,
                beatae?
              </p>
            </div>
            <div className="b1">
              <p className="x1">Education</p>
              <p className="x2">
                Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. consectetur adipisicing elit.
                Voluptates, beatae?
              </p>
            </div>
          </div>
        </div>

        <div className="foot">
          <p className="foot-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolor ipsa molestias quasi debitis aspernatur, eos corporis
            doloremque voluptatem, quae deserunt alias. Eligendi alias possimus,
            natus animi ea vel reiciendis quae officiis tempora minus,
            voluptatem necessitatibus voluptas incidunt, sunt rerum amet
            veritatis commodi officia aspernatur distinctio quasi reprehenderit!
            Error, repudiandae.
            <p className="foot-text-b">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </p>
          <div className="mid">
            <p className="fot-mid ">Photography</p>
            <p className="fot-mid ">Lorem it amet.</p>
            <p className="fot-mid ">Lorem ipsumsectetur.</p>
            <p className="fot-mid ">Lorem, ipsum.</p>
          </div>
          <div className="laste">
            <p className="fot-last">
              Lorem ipsum dolor sit apsum dolor sit amet. adipisicing elit.
              Itaque explicabo architecto dolor!
            </p>
            <p className="fot-last">
              Lorem ipsum dolor sit ametor sit amet. adipisicing elit. Itaque
              explicabo architecto dolor!
            </p>
            <p className="fot-last">
              Lorem ipsum dolor sit amet consectetur,Lolor sit amet. adipisicing
              elit. Itaque explicabo architecto dolor!
            </p>
            <p className="fot-last">
              Lorem ipsum dolor stetur,Lorem ipsum dolor sit amet. adipisicing
              elit. Itaque explicabo architecto dolor!
            </p>
          </div>
        </div>

        <div className="pink-fot">
          <div className="text-pink-fot">
            <p className="pinkfot-text">Lorem ipsum dolor sit amet.</p>
            <p className="pinkfot-text2">
              Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </p>
          </div>
          <button type="btn" className="fot-btn">
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
}
