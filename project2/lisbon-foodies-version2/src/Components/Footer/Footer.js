import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

function Footer() {
  return (
    <footer style={{ backgroundColor: "#608E3F" }}>
      <div className="footer-container">
        <div className="social-media">
          <a href="https://www.facebook.com/" target="_blank">
            <img  className="social-logo" src="https://cdn4.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="Facebook" width="30" height="30" />
          </a>
          <a  href="https://www.instagram.com/" target="_blank">
            <img  className="social-logo" src="https://cdn4.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="Instagram" width="30" height="30" />
          </a>
        </div>
        <div className="about-us">
          <Link to="/about-us"><p className="about-text">About Us</p></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
