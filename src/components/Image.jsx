import React from 'react';
import './Image.css';

const Image = () => {
  return (
    <div>
        <div className="contain">
          <h1>WESTERN WEAR TRENDING CATEGORIES</h1>
          <div className="carder">
            <div className="crd">
          <img src="https://myrausa.com/cdn/shop/files/WALLET_1500x.jpg?v=1723810549" alt="" style={{width:"100%"}} />
          <div className="inner">
            <h3>Wallets</h3>
          </div>
            </div>
            <div className="crd">
                <img src="https://myrausa.com/cdn/shop/files/SHOES_1f415348-c092-4d66-b22c-0ac2619ea94f_1500x.jpg?v=1723810526" alt=""style={{width:"100%"}} />
                <div className="inner">
                    <h3>Shoes</h3>
                </div>
            </div>
            <div className="crd">
                <img src="https://myrausa.com/cdn/shop/files/JEWELRY_1500x.jpg?v=1723810567" alt="" style={{width:"100%"}} />
                <div className="inner">
                    <h3>Jewelry</h3>
                </div>
            </div>
            <div className="crd">
                <img src="https://myrausa.com/cdn/shop/files/MEN_6c074dfc-1f51-4497-a265-7994b710f21e_1500x.jpg?v=1723810591" alt="" style={{width:"100%"}} />
                <div className="inner">
                    <h3>Men</h3>
                </div>
            </div>
          </div>
        </div>
        <div className="bohera">
        <img src="https://cdn.shopify.com/s/files/1/0677/9312/5662/files/9-BOHERA_LOGO.png?v=1716271420" alt="" style={{width:"100%"}} />
        </div>
        <div className="pp">
        <p>Shop a curation of Southern Boho essensials made for Daily Comfort & Compliments</p>
        </div>
    </div>
  )
}

export default Image