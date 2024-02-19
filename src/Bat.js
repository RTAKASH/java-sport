import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';
import './Content.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import KeyFeatures from './KeyFeatures';
import Specifications from './Specifications'; 
import CustomerReviews from './CustomerReviews'; 
import ReactImageMagnify from 'react-image-magnify';

const Bat = ({updateCartCount}) => {
  const [enlargedImage, setEnlargedImage] = useState('BAT4.png');
  const [number, setNumber] = useState(1);

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const addToCart = () => {
    updateCartCount(prevCount => prevCount + 1);
  };
  return (
    <div className='Bat'>
    <Header />
    <div className='body'>
 
      <div className="parent">
        <div className='col-1'>
          <ul>
            <li><img src="BAT1.png" alt="Ball" onClick={() => handleImageClick('BAT1.png')} /></li>
            <li><img src="BAT2.png" alt="Ball" onClick={() => handleImageClick('BAT2.png')} /></li>
            <li><img src="BAT3.png" alt="Vector" onClick={() => handleImageClick('BAT3.png')} /></li>
          </ul>
        </div>
        <div className="col-2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Enlarged image',
                src: enlargedImage,
                isFluidWidth: true
              },
              largeImage: {
                src: enlargedImage,
                width: 1000,
                height: 1500
              },
              enlargedImageContainerClassName: 'enlarged-image-container',
              imageClassName: 'enlarged-image'
            }}
          />
        </div>
      </div>
  <div className='info1'>
    <div className='info'>
    <h1 className='h1'>ProStrike Cricket Ball</h1>
    <h4 className='h4'>Special price</h4>
    <h4 id="price">₹414 <span className='element'>₹1,249 </span><span>66% off</span></h4>
     </div>
     <div className='bar' >
       <img src="Line5.png" />
     </div>
     <div className='about'>
      <h1 className='h2'>About the Product</h1>
      <p className='p1'> Introducing our Elite Performance Cricket Jersey, designed for the modern cricketer who demands style, comfort, and optimal performance on the field. Crafted with high-quality materials and advanced technology, this jersey ensures you look and feel your best while dominating the game.</p>
     </div>
     <div className='bar' >
       <img src="Line5.png" />
     </div>
     <div class="shipping-container">
      <h2 className='h2'>Shipping Details</h2>
  <div class="shipping-details">
    <p>Free Shipping: Available on all orders within the continental US.</p>
    <p>International Shipping: Additional charges may apply.</p>
  </div>
</div>
<div className='bar' >
       <img src="Line5.png" />
     </div>
     <div className="checkbox-container">
  <h2 className='h2'>Select Pack</h2>
  <div className="checkboxes">
    <label>
      <input type="checkbox" />
      Single Ball
    </label>
    <label>
      <input type="checkbox" />
      Pack of 3
    </label>
    <label>
      <input type="checkbox" />
      Pack of 6
    </label>
    <label>
      <input type="checkbox" />
      Pack of 12
    </label>
  </div>
</div>
    <div className='bar' >
       <img src="Line5.png" />
     </div>
     <h3 className='quality'>Quantity</h3>
     <div className="table-container">
      <div className="table-column" onClick={decrementNumber}>-</div>
      <div className="table-column">{number}</div>
      <div className="table-column" onClick={incrementNumber}>+</div>
    </div>
    <div className='bar12' >
       <img src="Line5.png" />
     </div>
     <div className='inbox'>
      <h1>In the Box:</h1>
      <ul>
      <li>1 x Elite Series Kashmiri Willow Cricket Bat</li>
       <li>1 x Custom-Fit Bat Cover</li>
        </ul>
        <button className="button1" onClick={addToCart}>Add to Cart</button>
      <br></br>
      <button className="button2">Buy Now</button>
     </div>
    
      <div className="navbar1">
      <ul className="nav-links">
      <li><NavLink exact to="/KeyFeatures" activeClassName="active-link">KeyFeatures</NavLink></li>
     <li><NavLink exact to="/Specifications" activeClassName="active-link">Specifications</NavLink></li>
     <li><NavLink exact to="/CustomerReviews" activeClassName="active-link">CustomerReviews</NavLink></li>
      </ul>
      </div>
      <Routes>
        <Route path="/KeyFeatures" element={<KeyFeatures />} />
        <Route path="/Specifications" element={<Specifications />} />
        <Route path="/CustomerReviews" element={<CustomerReviews />} />
      </Routes>
  
   </div> 
    </div>  
    <Footer />
      </div>
  );
  }

export default Bat;