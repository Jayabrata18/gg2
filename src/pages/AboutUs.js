import "./AboutUs.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const navigateToButtonClikedPage = () => {
    navigate("/menu-button-clicked");
  };
  return (
    <div className="about-us1" id="MainDIv">
      <div className="tg-icon-2">
        <img
          className="logo-bw-photoroom-2-icon1"
          alt=""
          src="/shroomiezamanitaonobg-2@2x.png"
        />
        <img className="logo-bw-photoroom-2-icon2" alt="" src="/logo.png" />
        <h1 className="about" id="Heading">
          ABOUT
        </h1>
        <h1 className="specs" id="Heading">
          Specs
        </h1>
        <div className="welcome-to-shroomiez-container" id="para">
          <div className="writting-area-top1">
            <span className="welcome-to-shroomiez">
              Welcome to Shroomiez fellow friend. Shroomiez is an NFT
              collection, community and platform which:
            </span>
            <ul className="enables-holders-to-decide-on-w">
              <li className="enables-holders-to">
                Enables holders to decide on what is featured in the
                Shroomieverse
              </li>
              <li className="enables-holders-to">
                Features access to the most trusted dApps and NFT collections
              </li>
              <li className="enables-holders-to">
                Incentivizes the creation and reproduction of high quality
                content
              </li>
            </ul>
          </div>
        </div>
        <div className="writting-area-top2">
          <p className="shroomiez-will-be" id="para">
            Shroomiez will be treasury-backed thanks to Beramarket.
            Liquid-backing means higher trading liquidity, and high liquidity
            means a more stable market for the NFT collection.
          </p>
        </div>
        <div className="about-us-child5" id="MiddleDiv" />;
        <img className="about-us-child6" alt="" src="/about-us-2.png" />;
        <img className="about-us-child11" alt="" src="/about-us-4.png" />
        <div className="about-us-child" />
        <div className="about-us-item" />
        <div className="about-us-inner" />
        <img className="about-us-child7" alt="" src="/about-us-1.png" />;
        <h1 className="the-team" id="Heading">
          THE TEAM
        </h1>
        <button
          className="about-us-button"
          onClick={navigateToButtonClikedPage}
          autoFocus
        >
          <span className="menu2" id="menu">
            MENU
          </span>
        </button>
        <img className="about-us-child10" alt="" src="/about-us-3.JPG" />
        <div className="about-us-child9" id="DownDiv" />;
        <p className="more-details-on" id="para">
          More details on treasury multi-sig and official management will be
          revealed once Shroomiez is fully incorporated and legally covered.
        </p>
        <div className="about-us-child1" />
        <div className="about-us-child2" />
        <div className="about-us-child3" />
        <p className="each-shroomiez-is-container" id="para">
          <span className="each-shroomiez-is">
            Each Shroomiez is uniquely hand-drawn, featuring realistic
            attributes such as the Species itself, the Cap and the Spiking
            Activity: all of which come from 36 different mushroom species.
          </span>
        </p>
        <p className="the-backgrounds-are" id="para">
          The backgrounds are also hand-drawn, and are visual representations of
          primordial sound frequencies -- tuning each Shroomiez to its natural
          environment.
        </p>
        <p className="shroomiez-was-launched-container" id="para">
          <span className="shroomiez-was-launched">{`Shroomiez was launched with the support of quite a few anonymous Miladys, Beras, BGANs, Tubbys, et many more passionate NFT holders. 
 `}</span>
        </p>
        <p className="with-an-ample-container" id="para">
          <span className="with-an-ample">{`With an ample variety of personalities and backgrounds, from ex-JPM Quants, McKinsey (Global) Partners, VC & hedge fund Managers and tech-savvy celebrities, Shroomiez is well positioned to disrupt the NFT space and the physical world with a never-seen-before NFT-to-Physical approach.
`}</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
