import "./LandingPage.css";
import ScrollingText from "../components/SrollingText";

const LandingPage = () => {
  return (
    <div className="landing-page" id="MainDiv">
      <header className="landing-page-child" id="Header">
        <ScrollingText speed={20} />
      </header>
      <div className="landing-page-item" id="HeroSection" />
      <img className="landing-page-inner" alt="" src="/rectangle-8@2x.png" />
      <img className="logo-bw-photoroom-1-icon" alt="" src="/logo.png" />

      <img
        className="untitled-artwork-1-icon"
        alt=""
        src="/landing-page-1.png"
      />
      <button className="button-big" autoFocus />
      <span className="press-to-enter" id="span">
        Press To Enter Shroomlist
      </span>
      <img
        className="shroomiez-amanitao-nobg-1-icon"
        alt=""
        src="/shroomiez-amanitaO-nobg.png"
      />
      <a className="twitter1-21" />
      <a className="discord2-11" />
      <a className="ig3-21" />
      <a className="tg-icon-21" />
      <button className="landing-page-child1" autoFocus />
      <span className="menu" id="menu">
        MENU
      </span>
    </div>
  );
};

export default LandingPage;
