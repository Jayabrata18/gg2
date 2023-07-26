import { memo, useState } from "react";
import "./Footer.css";
const Footer = memo(() => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Add your logic to handle the email submission here
    console.log("Submitted email:", email);
  };
  return (
    <div className="footer" id="MainDiv">
      <div className="footer-child" />
      <div className="footer-item" id="BlueDiv" />
      <img className="footer-child1" alt="" src="Rectangle 15.png" />
      <img className="footer-child2" alt="" src="Rectangle 15.png" />
      <span className="shroomiez-curate-the-container" id="BlueSpan">
        <p className="shroomiez-curate-the">{`Shroomiez curate the Shroomieverse via snapshot proposals. 
        Get ready for the SHROOMIEZ WARS.  `}</p>
      </span>
      <a className="open-icon-nobg-2" href="/about-us" />
      <footer className="rectangle-footer" id="Footer" />
      <b className="request-shroomlist" id="Mail">
        REQUEST SHROOMLIST
      </b>
      <h6
        className="shroomiez-terms"
        id="terms"
      >{`Shroomiez Terms & Conditions`}</h6>
      <a className="discord2-2" href="https://twitter.com/ShroomiezNFTs" />
      <a className="ig3-3" />
      <a className="twitter1-3" />
      <a className="tg-icon-3" />
      {/* <img className="footer-child3" alt="" src="/ellipse-1@2x.png" />
      <img className="footer-child4" alt="" src="/ellipse-3@2x.png" />
      <img className="footer-child5" alt="" src="/ellipse-3@2x.png" />
      <img className="footer-child6" alt="" src="/ellipse-2@2x.png" />
      <textarea className="rectangle-textarea" />
      <button className="footer-child7" autoFocus />
      <button className="footer-child8" />
      <h2 className="email-address">Email Address</h2>
      <button className="screenshot-2023-06-02-at-1522" /> */}
      <div>
        <textarea
          className="rectangle-textarea"
          placeholder="Enter your email address..."
          value={email}
          onChange={handleInputChange}
        />
        <button className="footer-child8" onClick={handleSubmit}>
          <img className="arrow-button" alt="" src="/arrow-key.png" />
        </button>
      </div>
      <img
        className="screenshot-2023-06-02-at-1527"
        alt=""
        src="/footer-header.png"
      />
      <img className="footer-image-2" alt="" src="/wormhole1.jpeg" />
      <button className="bigButton" autoFocus>
        <spam className="buttonText"> ENTER THE SHROOMIEVERSE</spam>
      </button>

      <img className="img-1022-1-icon" alt="" src="/footer.png" />
    </div>
  );
});

export default Footer;
