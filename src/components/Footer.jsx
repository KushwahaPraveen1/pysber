import React from 'react'
import './Footer.css'
import { FaGitlab } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <><div className='footer_main'>
    <div className='footer'>
    <div className='foot-left'>
    <div className='foot-icon'> <FaGitlab /></div>
    <div className='foot-icon'>  <FaTwitter /></div>
    <div className='foot-icon'>  <FaTelegram /></div>
    <div className='foot-icon'>  <FaWordpress /></div>
       
       
    <div className='foot-icon'>     <FaWhatsapp /></div>
    
        </div>
        <div className='foot-right'>
        2024 © All Rights Reserved | Developed with ❤️ by <span>Psyber Inc</span>
        </div>
        </div></div>


    </>
  )
}

export default Footer