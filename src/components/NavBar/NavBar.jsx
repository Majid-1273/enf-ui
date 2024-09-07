import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/NavBar/logoGreen.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const NavBar = (props) => {
  const { bgImage, main_head, sub_head } = props;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return (
    <div className="custom-nav" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="custom-contact-nav">
        <div className="custom-social-icons">
          <FaInstagram size={25} className="custom-insta-logo" />
          <FaLinkedinIn size={25} className="custom-linkedin-logo" />
          <FaXTwitter size={25} className="custom-twitter-logo" />
          <FaFacebookF size={25} className="custom-facebook-logo" />
        </div>
        <div className="custom-contact">
          +1 248 248 2481<FaPhone className="custom-phone-logo" />
          info@domain.com<MdEmail className="custom-email-logo" />
        </div>
      </div>
      <div className="custom-navbar">
        <Link to="/" className="custom-nav-links custom-logo-nav">
          <img src={Logo} alt="" className="custom-logo-green" />
          <p className="custom-company-name">ILLUSION</p>
        </Link>
        <ul className={click ? "custom-links custom-active" : "custom-links"}>
          <li>
            <Link to="/" className="custom-nav-links custom-simple-links" onClick={handleClick}>Home</Link>
          </li>
          <li>
            <Link to="/company-directory" className="custom-nav-links custom-simple-links" onClick={handleClick}>Company Directory</Link>
          </li>
          <li>
            <Link to="/product-directory" className="custom-nav-links custom-simple-links" onClick={handleClick}>Product Directory</Link>
          </li>
          <li>
            <Link to="/about" className="custom-nav-links custom-simple-links" onClick={handleClick}>About Us</Link>
          </li>
          <li>
            <Link to="/cart" className="custom-nav-links custom-cart-nav" onClick={handleClick}>
              <MdOutlineShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="custom-nav-links custom-contactus-nav" onClick={handleClick}>Contact Us</Link>
          </li>
        </ul>
        <div className="custom-hamburger" onClick={handleClick}>
          {click ? <FaTimes style={{ color: "#000000" }} /> : <FaBars style={{ color: "#000000" }} />}
        </div>
      </div>
      <p className="custom-main-heading">{main_head}</p>
      <p className="custom-sub-heading">{sub_head}</p>
    </div>
  );
}

export default NavBar;
