import React from 'react';
import { useState } from 'react';
import Footer from './Footer';

function CustomerReviews() {
    const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);

    const toggleTextBoxVisibility = () => {
      setIsTextBoxVisible(!isTextBoxVisible);
    };
return (
 <div className='layer1'>
<div className='line1'>
<div className='review'>
  <h1>4.8<span><img src="Vector4.png"/></span></h1>
  <p>50 Reviews</p>
  
</div>
<div className='bar1' >
   <img src="Line5.png" />
 </div>
 <div className="container1">
<div className="rating-box">
<span className="title"><span><img src="Vector4.png" alt="" /></span>5</span>
<div className='rating-bar'>
<div className="rating-bar1" style={{ width: '90%' }}></div>
</div>
</div>

<div className="rating-box">
<span className="title"><span><img src="Vector4.png" alt="" /></span>4</span>
<div className='rating-bar'>
<div className="rating-bar2" style={{ width: '60%' }}></div>
</div>
</div>

<div className="rating-box">
<span className="title"><span><img src="Vector4.png" alt="" /></span>3</span>
<div className='rating-bar'>
<div className="rating-bar3" style={{ width: '40%' }}></div>
</div>
</div>

<div className="rating-box">
<span className="title"><span><img src="Vector4.png" alt="" /></span>2</span>
<div className='rating-bar'>
<div className="rating-bar4" style={{ width: '30%' }}></div>
</div>
</div>

<div className="rating-box">
<span className="title"><span><img src="Vector4.png" alt="" /></span>1</span>
<div className='rating-bar'>
<div className="rating-bar5" style={{ width: '10%' }}></div>
</div>
</div>
</div>

  <div className='reviews'>
    <div className='button-container'>
 <button className='view-all'>View all reviews</button>
 <button className="button4" onClick={toggleTextBoxVisibility}>
    Write a Review
  </button>
  {isTextBoxVisible && (
    <textarea
      rows="4"
      cols="50"
      placeholder="Write your review here..."
      className="review-textbox"
    />
  )}
  </div>
 <div className='reviews1'>
  <div className='name'>
  <img src="Ellipse.png"/>
 <p >Rahul</p>
 <div className='date1'>
   2024-01-25 <span>3:45 PM</span>
 </div>
 </div>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
  <div className='invi2'>
    <p>Introducing our Elite Series Kashmiri Willow Cricket Bat, crafted to perfection from the finest Kashmiri willow. This bat is designed for players who demand precision, power, and an authentic cricketing experience.</p>
    <img src="thumbsup.png"/>
  <div className='invi3'> 
    <p>was helpful</p>
    </div>
    </div>
   
 </div>
 
 <div className='bar4' >
   <img src="Line5.png" />
 </div> 
 <div className='reviews1'>
  <div className='name'>
  <img src="Ellipse 16.png"/>
 <p >Rahul</p>
 <div className='date'>
   2024-01-25 <span>3:45 PM</span>
 </div>
 </div>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
 <img className="star"src="Vector4.png"/>
  <div className='invi2'>
    <p>Introducing our Elite Series Kashmiri Willow Cricket Bat, crafted to perfection from the finest Kashmiri willow. This bat is designed for players who demand precision, power, and an authentic cricketing experience.</p>
    <img src="thumbsup.png"/>
    <div className='invi3'> 
    <p>was helpful</p>
    </div>
    </div>
 </div>
  </div>
  <div className='colors-box3'>
        hello
  </div>
  <div className='frequent3'>
    <h1>Frequently Bought Together</h1>
    <div className="card-container">
      <div className="card">
        <p className='java-tag'>Java sports</p>
      <div class="icon-container1">
        <img src="image.png" alt="Icon" />
      </div>
        <div className='imge-container'><img src="picture1.png" alt="Image 1" /></div>
        <p className='para1'>MEN'S CRICKET STRAIGHT FIT TROUSE..</p>
        <p className='para2'>₹400 <span>400</span>
        <div class="icon-container">
        <img src="Vector3.png" alt="Icon" />
        </div></p>
      </div>
      <div className="card2">
      <p className='java-tag'>Java sports</p>
      <div class="icon-container1">
        <img src="image.png" alt="Icon" />
      </div>
      <div className='imge-container'><img src="picture2.png" alt="Image 2" /></div>
        <p className='para3'>ProStrike Elite Cricket Bat</p>
        <p className='para4'>₹400 <span>400</span> 
        <div class="icon-container">
        <img src="Vector3.png" alt="Icon" />
        </div></p>
      </div>
      <div className="card3">
      <p className='java-tag'>Java sports</p>
      <div class="icon-container1">
        <img src="image.png" alt="Icon" />
      </div>
        <div className='imge-container'><img src="picture3.png" alt="Image 3" /></div>
        <p className='para5'>MEN'S CRICKET STRAIGHT FIT TROUSE..</p>
        <p className='para6'>₹400 <span>400</span> 
        <div class="icon-container">
        <img src="Vector3.png" alt="Icon" />
        </div></p>
      </div>
      <div className="card4">
      <p className='java-tag'>Java sports</p>
      <div class="icon-container1">
        <img src="image.png" alt="Icon" />
      </div>
      <div className='imge-container'><img src="picture4.png" alt="Image 3" /></div>
        <p className='para7'>MEN'S CRICKET STRAIGHT FIT TROUSE..</p>
        <p className='para8'>₹400 <span>400</span>
        <div class="icon-container">
        <img src="Vector3.png" alt="Icon" />
        </div></p>
      </div>
    </div>
</div>
</div>
<div className='size1'>
<Footer />
</div>
</div>

 );
}

export default CustomerReviews ;
