import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer>
    <div className="colored-block">
      <img src="layer1.png" alt="Image Description" />  
      <div className='Explore'>
        <h1 className='h1'>Explore Our Range</h1>
        <ul>
          <li>Bats</li>
          <li>Balls</li>
          <li>Protective Gear</li>
          <li>Footwear</li>
          <li>Apparel</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className='shopping'>
        <h1 className='h1'>Secure Shopping</h1>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Payment Options</li>
          <li>SSL Encrypted</li>
        </ul> 
      </div>
      <div className='why'>
        <h1 className='h1'>Why us</h1>
        <ul>
          <li>Quality Assurance</li>
          <li>Expert Advice</li>
          <li>Fast Shipping</li>
          <li>100% Satisfaction Guarantee</li>
        </ul>
      </div>
      <div className='support'>
        <h1>Customer Support</h1>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>FAQs Size</li>
          <li>Shipping & Returns</li>
        </ul> 
      </div>
      <div className='connect'>
        <h1>Connect with Us</h1>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>FAQs Size</li>
        </ul> 
      </div>
    </div>
    <div className="copyright">
    © 2024 Java Sports. All rights reserved.
  </div>
  </footer>
  
  );
}

export default Footer;
