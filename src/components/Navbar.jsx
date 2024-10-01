import React, { useEffect } from 'react'
import './Navbar.css';
import { useState } from 'react';
import Mobile_menu from '../Mobile-Menu/Mobile_menu'
const Navbar = () => {
  const [visible,setVisible]=useState(false);
  const togglmenu=()=>{
  setVisible(!visible);
  }
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }


    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);
  return (
    <div>
      <div className="container">
        <div className="annoucement-bar">
            <p>FREE SHIPPING OVER $75 IN US</p>
        </div>
        <nav className='nav'>
          <div className="hem"onClick={togglmenu}><i class="fa-solid fa-bars"></i></div>
            <div className="logo">
                <img src="https://myrausa.com/cdn/shop/files/logo-black_100x.png?v=1667798963" alt="" />
            </div>
            <div className="middle-nav">
                <ul>
                    <li>Bohera</li>
                    <li>Bags</li>
                    <li>Wallets</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                    <li>Jewelry</li>
                    <li>Apparels</li>
                    <li>Men</li>
                    <li>Home & living</li>
                </ul>
            </div>
            <div className="icons">
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </nav>
      </div>
      {visible && <Mobile_menu/>}
    </div>
  )
}

export default Navbar
