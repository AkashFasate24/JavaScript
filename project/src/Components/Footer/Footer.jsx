import React from "react";
import "./Footer.css";
import insta from "../Assets/instagram.png";
import fb from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="" alt="" />
        <p>Shoppers</p>
      </div>
      <ul className="footer-links">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={insta} alt="" height="50px" />
        </div>
        <div className="footer-icons-container">
          <img src={fb} alt="" height="50px" />
        </div>
        <div className="footer-icons-container">
          <img src={linkedin} alt="" height="50px" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All reserved</p>
      </div>
    </div>
  );
};

export default Footer;
