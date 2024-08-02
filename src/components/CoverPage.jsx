// src/components/CoverPage.jsx
import React from 'react';
import './CoverPage.css'; // Make sure to create and style this CSS file

const CoverPage = ({ onEnter }) => {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <h1>Welcome to My Website</h1>
        <p>Your introduction or tagline goes here.</p>
        <button onClick={onEnter}>Enter Site</button>
      </div>
    </div>
  );
};

export default CoverPage;
