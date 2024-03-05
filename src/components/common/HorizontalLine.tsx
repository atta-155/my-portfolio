import React from 'react';

const HorizontalLine = () => {
    const lineStyle = {
      height: '4px',
      background: '#ED673C', // Change the color as needed
      border: 'none',
      margin: '0px 20px', // Adjust margin as needed
      width: "50px"
    };
  
    return (
      <div style={lineStyle}></div>
    );
  };
  
  export default HorizontalLine;
  