import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [li, setLi] = useState(false);

  return (
    <div>
      <div className="Footer">
        <div className="fir">
          <h3>MYRA BAG</h3>
          <p>
            At Myra, We celebrate the Outspoken everyday. Showcasing the modern free spirit & crafting the legacy of our staples made with hands by our Artisans.
          </p>
          <p>Email: cs@myrausa.com</p>
          <p onClick={() => setLi((prev) => !prev)}>CUSTOMER SERVICE HOURS</p>
          {li && <External />}
        </div>
        <div className="seco">
          <h3>Main menu</h3>
          <ul>
            <li>Bohera</li>
            <li>Bags</li>
            <li>Wallets</li>
            <li>Shoes</li>
            <li>Accessories</li>
            <li>Jewelry</li>
            <li>Apparels</li>
            <li>Man</li>
            <li>Home & Living</li>
          </ul>
        </div>
        <div className="thir">
          <h3>Important Links</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Cancellation & Returns</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Apparels</li>
            <li>Man</li>
            <li>Home & Living</li>
          </ul>
        </div>
        <div className="fou">
          <h3>Newsletter</h3>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <input type="text" placeholder='Enter your email address' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

const External = () => {
  return (
    <>
      <div>
        Mail: <a href="mailto:mohitrathore1326@gmail.com" style={{color:"#fff"}}>mohitrathore1326@gmail.com</a>
      </div>
    </>
  );
}

export default Footer;
