import React from "react";
import "./ScrollingText.css"; // Import the CSS for styling

const ScrollingText = ({ speed }) => {
  return (
    <div className="scrolling-text-container">
      <span
        className="scrolling-text"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="scrolling-text-joy">
          GET SHROOMLISTED!! DON’T FORGET TO GET SHROOMLISTED!! GET
          SHROOMLISTED!! DON’T FORGET TO GET SHROOMLISTED! GET SHROOMLISTED!!
          DON’T FORGET TO GET SHROOMLISTED!! GET SHROOMLISTED!! DON’T FORGET TO
          GET SHROOMLISTED!!
        </span>
      
      </span>
    </div>
  );
};

export default ScrollingText;
