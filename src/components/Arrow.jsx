// Arrow.js
import React from 'react';
import './Arrow.css'; // Optional: if you want to style the arrows specifically

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      &lt;
    </div>
  );
};

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      &gt;
    </div>
  );
};
