import React from 'react';
import Slider from 'react-slick';
import './Slide1.css';
import { PrevArrow, NextArrow } from './Arrow';

const sliderSettings = {
  autoplay: false,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 767, // Apply settings for screens smaller than 767px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slide1 = () => {
  return (
    <div className="slider-container sl">
      <Slider {...sliderSettings}>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-10702_1_cb6d23e5-deeb-42ad-b2e0-28464e77c984_400x.jpg?v=1720070473" 
            alt="Product 1" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-9929_1_400x.jpg?v=1719805820" 
            alt="Product 2" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-9946_1_400x.jpg?v=1719747664" 
            alt="Product 3" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-10599_2_d2b3becd-292a-402f-90ea-89ab7a800248_400x.jpg?v=1720070442" 
            alt="Product 4" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-9710_4_7a62fd19-e57f-4b68-af08-d18d6847318d_400x.jpg?v=1720070696" 
            alt="Product 5" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-9710_4_7a62fd19-e57f-4b68-af08-d18d6847318d_400x.jpg?v=1720070696" 
            alt="Product 6" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-10455_1_1b2f0a1b-2bfa-4b98-b57b-4c25edcb6d27_400x.jpg?v=1720070532" 
            alt="Product 7" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
        <div className="slide-item">
          <img 
            src="https://myrausa.com/cdn/shop/files/S-9708_10_37f64fde-676e-4743-a47d-3eff9a981c7a_400x.jpg?v=1720070705" 
            alt="Product 8" 
            className="slide-image"
          />
          <p>chimayu</p>
        </div>
      </Slider>
    </div>
  );
};

export default Slide1;
