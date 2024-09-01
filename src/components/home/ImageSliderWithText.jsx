import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSliderWithText.css'
import image1 from '../../assets/one-big-happy-family-cropped-shot-of-a-happy-dive-2023-11-27-04-53-51-utc1.jpg';
import image2 from '../../assets/outdoor-portrait-of-cheerful-indian-family-sitting-2024-02-13-02-17-57-utc 1(1).jpeg.jpg';
import image3 from '../../assets/national-cancer-institute-xDSD3Vmzh70-unsplash (1).jpg'
const ImageSliderWithText = () => {
  const images = [
    image1,
    image2,image3];

  const properties = {
    prevArrow: null,  // Hide the previous arrow
    nextArrow: null   // Hide the next arrow
  };

  return (
    <div>
        <Fade>
            <div className="each-slide">
            <div>
                <img src={images[0]} />
            </div>
            <p>At Alphaa Financial Solutions, we offer a comprehensive range of financial services</p>
            </div>
            <div className="each-slide">
            <p>At Alphaa Financial Solutions, we offer a comprehensive range of financial services</p>
            <div>
                <img src={images[1]} />
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img src={images[2]} />
            </div>
            <p>At Alphaa Financial Solutions, we offer a comprehensive range of financial services</p>
            </div>
        </Fade>
    </div>
  );
};

export default ImageSliderWithText;