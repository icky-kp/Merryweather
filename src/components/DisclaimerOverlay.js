// DisclaimerOverlay.js
import React, { useState } from 'react';

const DisclaimerOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleYes = () => {
    // Handle the user's decision to proceed
    setShowOverlay(false);
  };

  const handleNo = () => {
    // Handle the user's decision to decline
    // You can redirect them to another page or perform any other desired action
    window.location.href = 'https://www.example.com';
  };

  return showOverlay ? (
    <div className="disclaimer-overlay">
      <div className="disclaimer-content">
        <h2>Disclaimer</h2>
        <p>This is your disclaimer message.</p>
        <div className="disclaimer-buttons">
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default DisclaimerOverlay;