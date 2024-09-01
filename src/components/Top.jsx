import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";

import './Top.css'
function Top() {
  return (
    <>
        <header className='top_main'>
<div>
    <span><FaLocationDot className='icons_top'/> Sydney,Austrailia</span>
    <span><MdCall className='icons_top'/> 0468328227</span>
    <span><MdAccessTimeFilled className='icons_top'/> Mon - Fri: 9:00am - 5:00pm</span>
    <span><MdAccessTimeFilled className='icons_top'/>Weekends Appointments Only</span>
</div>
        </header>
    </>
  )
}

export default Top