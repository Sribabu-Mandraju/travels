import React from 'react';
import img from '../assets/cursor.png'

const CustomCursorComponent = () => {
  return (
    <div className="w-full"
      style={{
        cursor: 'url("../assets/cursor.png"), auto', // Path to your custom cursor image
        height: '100vh', // Full page height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Custom Cursor Example</h1>
    </div>
  );
};

export default CustomCursorComponent;