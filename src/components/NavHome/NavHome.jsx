import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/logoGreen.png";
import "./navhome.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NavHome = (props) => {
    const { bgImage } = props;
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            easing: "ease-in-out", // Easing function
            once: true, // Only animate once
        });
    }, []);

    return (
        <div 
            className="custom-navh" 
            style={{ backgroundImage: `url(${bgImage})` }}
            data-aos="fade" // AOS fade animation for the main container
        >
            <div 
                className="custom-contact-nav"
                data-aos="fade-down" // AOS fade-down for the contact navigation
                data-aos-delay="100" // Delay for staggered effect
            >
                <div className="custom-social-icons ">
                    <FaInstagram size={25} className="custom-insta-logo hover:text-green-500" />
                    <FaLinkedinIn size={25} className="custom-linkedin-logo hover:text-green-500" />
                    <FaXTwitter size={25} className="custom-twitter-logo hover:text-green-500" />
                    <FaFacebookF size={25} className="custom-facebook-logo hover:text-green-500" />
                </div>
                <div className="custom-contact">
                    +1 248 248 2481<FaPhone className="custom-phone-logo" />
                    info@domain.com<MdEmail className="custom-email-logo" />
                </div>
            </div>
            <div 
                className="custom-navbar"
                data-aos="fade-down" // AOS fade-down for the navbar
                data-aos-delay="200" // Delay for staggered effect
            >
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
                        <Link to="/cart" className="custom-nav-links custom-cart-nav hover:text-green-500" onClick={handleClick}>
                            <MdOutlineShoppingCart />
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="custom-nav-links custom-contactus-nav hover:text-green-500" onClick={handleClick}>Contact Us</Link>
                    </li>
                </ul>
                <div className="custom-hamburger" onClick={handleClick}>
                    {click ? <FaTimes style={{ color: "#000000" }} /> : <FaBars style={{ color: "#000000" }} />}
                </div>
            </div>
            <div 
                className="text-left text-white lg:pl-0 lg:pt-20 lg:pb-20 md:pt-20 md:pb-20 pl-12 pt-16 pb-16"
                data-aos="fade-up" // AOS fade-up for the text content
                data-aos-delay="300" // Delay for staggered effect
            >
                <p className="text-sm md:text-lg lg:text-xl font-medium mb-2 text-green-500">Welcome to ILLUSION</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">Powering The Future</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-green-500">With Illusion Solar</p>
                <p className="text-xs md:text-sm lg:text-base max-w-xl mb-6">
                    With over 19 years in the solar industry, we're the premier source
                    connecting suppliers and customers. Our site, used by over 5,000,000
                    users annually, offers unmatched scale, data quality, and industry
                    insights.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-green-500 text-black py-3 px-5 rounded-full hover:bg-green-600">Shop Now</button>
                    <button className="border border-green-500 text-green-500 py-3 px-5 rounded-full hover:bg-green-500 hover:text-white">About Us</button>
                </div>
            </div>
        </div>
    );
}

export default NavHome;
