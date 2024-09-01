import React from "react";
import ImageSliderWithText from "./ImageSliderWithText";
import Section2Right from "./Section2Right";
import "./Section2.css";
import screen from '../../assets/Screenshot 2024-08-31 232246.jpg'
function Section2() {
  return (
    <>
    <div style={{backgroundColor:'#f5f5f5'}}>
    <div style={{backgroundColor:'#f5f5f5',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
<img src={screen}></img>
<span>Services</span>
<h1>Our Services</h1>
    </div>
      <div className="section2" style={{backgroundColor:'#f5f5f5'}}>
        <div className="section2left2">
          <Section2Right />
        </div>
        <div className="section2right2">
          {" "}
          <ImageSliderWithText />
        </div>
      </div></div>
    </>
  );
}

export default Section2;
