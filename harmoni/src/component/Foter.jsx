import React from 'react'
import '../Css/Foter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function Foter() {
  return (
    <div>
      

      <div className="fotter">
        <h2 className="purple-txt text-3xl">Do you Want to Step in to the <br/> future of Your Upcoming Event</h2>
        <div className="bord-tx1">
        <p  className="bord-tx rounded-2xl">Request Early Access</p>
        </div>

        <div className="three-col-foter">
            <div className="thrre-first">
          <FontAwesomeIcon icon={faReact} className='text-primary' id='tfen'/>
            <p className="thrre-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit Nulla!</p>
            <p className="thrre-2">Get in touch</p>
            <p className="thrre-3">Lorem ipsum dolor sit amet.</p>
            <p className="thrre-4">085-1234567</p>
            <p className="thrre-5">info@payme.net</p>
            </div>

            <div className="three-sec">
              <p className="thr-1">Links</p>
              <p className="thr-3">Overons</p>
              <p className="thr-3">Social Media</p>
              <p className="thr-3">Counters</p>
              <p className="thr-3">Contact</p>
            </div>
            <div className="three-sec">
              <p className="thr-1">Company</p>
              <p className="thr-3">Term & Condition</p>
              <p className="thr-3">Privacy Policy</p>
              <p className="thr-3">Contact</p>
            </div>
        </div>
            <div className="warnys">@2024 PPP-26. All Right reserve</div>
      </div>
    </div>
  )
}
