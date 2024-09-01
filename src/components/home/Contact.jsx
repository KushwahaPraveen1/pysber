import React from 'react'
import './Contact.css'

import { FaGitlab } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import imggg from '../../assets/close-up-person-working-call-center.jpg'
function Contact() {
  return (
    <>
      <div className='cont'>
      <div className='cont-left'>

        <h1>Contact Us</h1>
        <p>Please feel free to ask if you have any further questions.</p>
        <div className="quick-icon">
            <span>
              {" "}
              <FaLocationDot className="icons_top" />
              Sydney, Austrailia
            </span>
            <span>
              <MdCall className="icons_top" />
              0468328227
            </span>
            <span>
              <MdAccessTimeFilled className="icons_top" />
              Mon - Fri: 9:00am - 5:00pm
            </span><span>
              <MdAccessTimeFilled className="icons_top" />
              Weekend Appointments Only

            </span>
          </div>
          <div className='foot-left'>
    <div className='foot-icon'> <FaGitlab /></div>
    <div className='foot-icon'>  <FaTwitter /></div>
    <div className='foot-icon'>  <FaTelegram /></div>
    <div className='foot-icon'>  <FaWordpress /></div>
       
       
    <div className='foot-icon'>     <FaWhatsapp /></div>
    
        </div>
      </div>
      <div className='cont-right'>
        <img src={imggg}></img>
        </div>
      </div>
    </>
  )
}

export default Contact