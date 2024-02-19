import React from 'react';
import Footer from './Footer';

const Specifications = () => {
  return (
    <div className='spec-1'>
      <h2>Model Number: SS-2024</h2>
      <h2>Material:</h2>
      <div className='spec-list'>
        <ul>
          <li>
          Blade: Grade A English Willow


          </li>
          <li>Handle: Premium cane handle with rubber grip</li>
          <li>Toe: Rounded for enhanced durability</li>
        </ul>
      </div>
      <h2>Dimensions:</h2>
      <div className='spec-list2'>
        <ul>
          <li>Blade Length: 22 inches  </li>              
            <li>Blade Width: 4.25 inches</li>
            <li>Handle Length: 11 inches</li>
            <li>Total Length: 33 inches</li>
            <li>Weight: 2.8 lbsBlade Length: 22 inches</li>
        </ul>
      </div>

      <div className='colors-box2'>
        hello
      </div>
      <div className='frequent2'>
    <h1>Frequently Bought Together</h1>
    <div className="card-container">
      <div className="card">
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
    <Footer />
    </div>
  );
}

export default Specifications;