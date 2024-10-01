import React, { useState } from 'react'
import './Text.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
const Text = () => {
    const [activeComponent,setActiveComponent]=useState('one');
  return (
    <>
    <div className="main-container">
      <div className="text-container">
        <h3>Discover MYRA'S</h3>
        <h1>COUNTRY AND WESTERN WEAR COLLECTION</h1>
            <p>Explore Myra's Up-cycled & Handcrafted Leather Bags.</p>
            <a href="#">SHOP NEW ARRIVALS</a>
      </div>
      <div className="cards">
        <div className="card">
            <img src="https://myrausa.com/cdn/shop/files/UP_CYCLED_CANVAS_BAG_1500x.jpg?v=1723810448" alt="" />
            <div className="inner-content">
                <p>Up Cycled Canvas Bag</p>
                <a href="">SHOP NOW</a>
            </div>
        </div>
        <div className="card">
            <img src="https://myrausa.com/cdn/shop/files/LEATHER_HAIRON_1500x.jpg?v=1723810472" alt="" />
            <div className="inner-content">
                <p>Leather & Hairon Bag</p>
                <a href="">SHOP NOW</a>
            </div>
        </div>
        <div className="card">
            <img src="https://myrausa.com/cdn/shop/files/BOHERA_APPAREL_1500x.jpg?v=1723810495" alt="" />
            <div className="inner-content">
                <p>Bohera Apparel</p>
                <a href="">SHOP NOW</a>
            </div>
        </div>
      </div>
      </div>

      <div className="text-1">
        <p>FW/2024</p>
        <h1>Authentic Western Wear: Fresh Cowgirl Finds</h1>
        <p>Discover authentic country and western wear collections today.</p>
        <div className="btns">
        <button onClick={()=>setActiveComponent('one')} className={`${activeComponent==='one'?'active':''}`}>NEW ARRIVALS</button>
         <button onClick={()=>setActiveComponent('two')} className={`${activeComponent==='two'?'active':''}`}>BESTSELLERS</button>
        </div>
      </div>
      {activeComponent==='one' && <Slide1/>}
      {activeComponent==='two' && <Slide2/>}
      <div className="view">
        {/* <p>Shop Our New Collection Of Bohera, Designed in Italy.</p> */}
      <button>VIEW ALL</button>
      </div>
    </>
  )
}

export default Text
