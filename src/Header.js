
import React from 'react';
import { NavLink, Routes, Route,Link } from 'react-router-dom';
import './Header.css'; 
import Bat from './Bat';
function Header({ cartCount }) {
  
  return (
    <header>

    <div className='header1'>
      <nav className="navbar">
        <div className="logo">
         <img src="instagram.png" />
         <img src="facebook.png" />
        </div>
        <ul className="navbar-list">
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#payment">Payment and Delivery</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </nav>
      </div>
      <div className="container">
        <div className='java-sports-logo'>
         <img src="layer1.png"/>
        </div>
       <div className="search-bar">
       <input type="text" placeholder="Search for balls" />
       <img  className="search" src="search.png"/> 
        </div>
        <ul className="sports-navbar">
          <li>
          <img className="image-icon" src="vector.png"/>
            <a href="#locations"> Locations</a></li>
          <li>
         
          <img  className="image-icon"  src="heart.png " />
            <a href="#wishlist">Wishlist</a></li>
          <li>
          <img className="image-icon"  src="vector2.png"/>
          <a href="#mycart">My Cart</a><span className="notification-count">{cartCount}</span></li>
          <li>
          <img className="image-icon" src="vector1.png" />
            <a href="#profile">Profile</a></li>
        </ul>
      </div>
      <div className='colors-box'>
        hello
      </div>
    <div className='layer1'>
      <div className="navbar2">
      <ul className="nav-links">
        <li><a href="#appeal">Appeal</a></li>
        <li><Link to="/Bat">Bat</Link></li>
        <li><a href="#balls">Balls</a></li>
        <li><a href="#shoes">Shoes</a></li>
        <li><a href="#accessories">Accessories</a></li>
      </ul>
      </div>
    </div>
    <div className='color-box'>
    <ul class="navigation">
    <li><a href="#">Home </a><span> >> </span></li>
    <li><a href="#">Bats</a><span> >> </span></li>
    <li><a href="#">Kashmiri Willow</a></li>
</ul>
    </div>
    
    </header>
  );
}

export default Header;
