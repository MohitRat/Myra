import React, { useEffect, useState } from 'react';
import './Mobile_menu.css';

const Mobile_menu = () => {
    const [state,setState]=useState(true);
    const fun=()=>{
        setState(!state);
    }
    useEffect(()=>{
        if(!state){
       document.body.style.overflow="auto";
        }
    },[state])

  return (
    <div>{state &&(
      <div className="mob_menu">
        <div className="draw" onClick={fun}>X</div>
        <ul>
            <li>Bohera</li>
            <li>Bags</li>
            <li>Wallets</li>
            <li>Accessories</li>
            <li>Jewelry</li>
            <li>Apparels</li>
            <li>Men</li>
            <li>Home & Living</li>
            <li>Account</li>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Mobile_menu
