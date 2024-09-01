import React from 'react'
import './Expertise.css'
import img1 from '../../assets/expertise1.jpg'
import img2 from '../../assets/expertise2.jpg'
function Expertise() {
  return (
    <>
        <div className='expertise'>

<div className='expertise__container1'>
    <img src={img1}></img>
</div>
<div className='expertise__container2'>
    <img src={img2}></img>
</div>

        </div>
    </>
  )
}

export default Expertise