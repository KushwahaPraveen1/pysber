import img1 from '../../assets/section1.jpg'
import img2 from '../../assets/section2.jpg'
import img3 from '../../assets/webelievehead.jpg'
import React from 'react'
import './Section1.css'
function Section1() {
  return (
    <>
    <div className='aboutmain1'>
<img src={img3}></img>
    <div className='about_main'>
        <div className='about-sec1'>
<img src={img1}></img>
        </div>

        <div className='about-sec2'>
<img src={img2}></img>
        </div></div></div>
    </>
  )
}

export default Section1