import "./Home.css";
import React, { useState, useEffect } from "react";

const images = [
  "about-us-1.png",
  "home2.JPG",
  "home3.JPG",
  "home4.JPG",
  "home5.JPG",
  "home6.JPG",
  "home7.JPG",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Create a timer to change images every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      // Clear the interval on component unmount
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="home1" id="Home">
      <div className="home-inner" id="BigWrittenAera">
        <span className="shroomiez-curate-the-container">
          <p className="shroomiez-curate-the">{`Shroomiez is a collection of 660 meticulously hand-drawn NFTs that exist on the Ethereum blockchain. Stepping into the vibrant Shroomieverse means immersing oneself in a metaverse of untapped utility and value, providing opportunities for prosperity through DeFi and NFTs.

Just as each Shroomie is unique in its design, the experiences and opportunities it offers are singularly remarkable. 
As a Shroomie holder, you become a part of an influential decentralized community that is 
set to shape the future of the digital realm.
  `}</p>
        </span>
      </div>
      <a className="open-icon-nobg-2" href="/about-us" />
      <div className="sliding-window">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="home-child" />
      <img
        className="shroomiez-amanitao-nobg-3-icon"
        alt=""
        src="/shroomiezamanitaonobg-3@2x.png"
      />
      <div className="home-item" />
    </div>
  );
};

export default Home;
