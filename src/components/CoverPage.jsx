// import React from 'react'; 
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import './CoverPage.css'; // Ensure this CSS file exists and is properly styled

const CoverPage = (props) => {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <h1>Welcome to My Website</h1>
        <p>Your introduction or tagline goes here.</p>
        {/* Accessing the onEnter function from props */}
        <button onClick={props.onEnter}>Enter Site</button>
      </div>
    </div>
  );
};

// Define PropTypes for the component
CoverPage.propTypes = {
  onEnter: PropTypes.func.isRequired // Specify that onEnter should be a required function
};

export default CoverPage;
