import React from 'react';
import Slider from 'react-slick';
import './Hero.css'; 

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Hero = () => {
  return (
    <div className="slider-container">
      <Slider {...sliderSettings} className='des'>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/1_16cff643-ec27-4f18-8f79-f3dd44a031b1_1600x.jpg?v=1723810987" alt="" />
        </div>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/2_60195d56-0b3b-4aaf-ad7f-5cbcd99b73d0_1600x.jpg?v=1723811084" alt="" />
        </div>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/3_2bf216cd-20f1-4b11-9a6f-5629d586f125_1600x.jpg?v=1723811105" alt="" />
        </div>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/4_4fd27bb7-250f-4384-b9dd-2298ebf81b2b_1600x.jpg?v=1723811133" alt="" />
        </div>
      </Slider>
      <Slider {...sliderSettings} className='mob'>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/1_1_56328d2f-cc11-44df-b80e-16a572369c98_x800.jpg?v=1723803241" alt="" />
        </div>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/2_1_b8c82a93-567f-4592-a649-da8b0fa8e1cb_x800.jpg?v=1723803253" alt="" />
        </div>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/3_1_ee0cfdc1-5755-42aa-8cd2-3b90ecb95c41_x800.jpg?v=1723803266" alt="" />
        </div>
        <div>
          <img src="https://myrausa.com/cdn/shop/files/4_1_0a359471-0cc7-4c4e-9f40-b6318ce42468_x800.jpg?v=1723803280" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
