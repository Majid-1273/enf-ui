import { FaXTwitter } from "react-icons/fa6"; 
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoFooter from "../assets/images/logoWhite.png"
import "../assets/css/app.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer-logo">
          <img src={logoFooter} alt="Logo" /><p>ILLUSUN</p>
        </div>
        <div className="description-footer">
          Used by over 50,000 users annually, offers unmatched scale, data quality, and industry insights.
        </div>
        <div>
          <FaInstagram size={25} className="insta-logo" />
          <FaLinkedinIn size={25} className="linkedin-logo" />
          <FaXTwitter size={25} className="twitter-logo" />
          <FaFacebookF size={25} className="facebook-logo" />
        </div>
      </div>
      <ul className="footer2 footer-categories">
        <li className="main-head">Company Directory</li>
        <li>Solar Panels</li>
        <li>Solar Components</li>
        <li>Solar Materials</li>
        <li>Solar System Installers</li>
        <li>Softwares</li></ul>
      <ul className="footer3 footer-categories"><li className="main-head">Product Directory</li>
        <li>Solar Panels</li>
        <li>Solar Inverters</li>
        <li>Mounting Systems</li>
        <li>Charge Controllers</li>
        <li>Battery Storage Systems</li></ul>
      <ul className="footer4 footer-categories"><li className="main-head">About</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Company Updates</li>
        <li>Business News</li>
        <li>Featured Products</li></ul>
      <div className="rights">All rights reserved | Terms & Conditions</div>
    </div>
  );
}

export default Footer;
