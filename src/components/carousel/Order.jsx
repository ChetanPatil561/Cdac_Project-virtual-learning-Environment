import React from 'react';
import Oder from "./Order.css";
const Order = () => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/2942/2942703.png" alt="Image 1" />
        <h5>Content</h5>
        <p>offering interactive features and personalized learning pathways</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/6107/6107018.png" alt="Image 2" />
        <h5>SUPPORT 24/7</h5>
        <p>Our support team is always there for you</p>
      </div>
      <div class = "vertical"></div>
      <div className="image-container">
        <img src="https://cdn-icons-png.flaticon.com/512/747/747982.png" alt="Image 3" />
        <h5>Aceess</h5>
        <p>Anywhere-Anytime You can Access</p>
      </div>
    </div>
  );
};

export default Order;