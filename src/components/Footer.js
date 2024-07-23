import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Smart-Shopping</h4>
          <ul>
            <li>
              <a href="#marketing">Products</a>
            </li>
            <li>
              <a href="#analytics">Category</a>
            </li>
            <li>
              <a href="#commerce">Signup</a>
            </li>
            <li>
              <a href="#insights">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>
              <a href="#pricing">Home-Eseentails</a>
            </li>
            <li>
              <a href="#documentation">Electronic</a>
            </li>
            <li>
              <a href="#guides">Home-decoration</a>
            </li>
            <li>
              <a href="#api-status">Cloths</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Category</h4>
          <ul>
            <li>
              <a href="#about">Men</a>
            </li>
            <li>
              <a href="#blog">Wome</a>
            </li>
            <li>
              <a href="#jobs">Children</a>
            </li>
             {/* <li>
              <a href="#press">Press</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li> */}
          </ul> 
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#claim">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Smart-Shopping</p>
        <div className="footer-social">
          <a className="icon" href="#facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a className="icon" href="#instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
