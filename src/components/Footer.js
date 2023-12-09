import wconImage from "../pictures/wcon.png";
import econImage from "../pictures/econ.png";
import insta from "../pictures/logo-instagram.svg";
import face from "../pictures/logo-facebook.svg";
import youtube from "../pictures/logo-youtube.svg";

function Footer() {
  return (
    <footer className="main-footer">
      <div>
        <img className="footer-image1" src={wconImage} alt="wcon"></img>
        <img className="footer-image1" src={econImage} alt="econ"></img>
      </div>
      <div className="footer-image2-box">
        <img className="footer-image2" src={insta} alt="insta" />
        <img className="footer-image2" src={face} alt="face" />
        <img className="footer-image2" src={youtube} alt="youtube" />
      </div>
    </footer>
  );
}

export default Footer;
