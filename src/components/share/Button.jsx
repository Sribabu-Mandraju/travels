import React from "react";

function Button({ text, onClick }) {
  return (
    
      <button 
        className="glow-btn px-3 py-1" 
        onClick={onClick} // Attach the onClick function from props
      >
        {text}
      </button>
    
  );
}

export default Button;
