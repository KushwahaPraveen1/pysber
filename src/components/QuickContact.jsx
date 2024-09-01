import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import "./QuickContact.css";
function QuickContact() {
  return (
    <>
      <div className="quick-contact">
        <div className="quick-contact-left">
          <p className="quick-heading">Quick Contact</p>
          <p>
            At Alphaa Financial Solutions, we believe in empowering your
            property dreams with our premium financial services.{" "}
          </p>

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
            
            </span>
          </div>
        </div>
        <div className="quick-contact-right">

<h2 style={{marginBottom:'2rem'}}>Opening Hours</h2>
<p><span style={{color:'#ff9021'}}>MON TO FRI</span> <span class="dots"></span> 9:00am | 5:00pm</p>
<p><span style={{color:'#ff9021'}}>SAT TO SUN</span> <span class="dots"></span> APPOINTMENTS ONLY</p>
<button>SCHEDULE A VISIT</button>

        </div>
      </div>
    </>
  );
}

export default QuickContact;
