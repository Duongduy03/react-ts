import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const FooterClient = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="footer-item">
          <div className="header-logo">
            <a href="#" className="logo">
              Shoes store
            </a>
          </div>
          <p>
            Let’s make something great together. We are trusted by over 5000+
            clients.
            <br />
            Join them by using our services and grow your business
          </p>
        </div>
        <div className="footer-item">
          <h3>Need Help ?</h3>
          <span>Support</span>
          <span>Get Started</span>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footer-item">
          <h3>Learn more</h3>
          <span>About Us</span>
          <span>Features</span>
          <span>Customers</span>
          <span>Newsletter</span>
        </div>
        <div className="footer-item">
          <h3>Get in Touch</h3>
          <span>
            {" "}
            80 Xuân Phương, Nam Từ Liêm, Hà Nội
            <br />
            Việt Nam
          </span>
          <span>info@email.com</span>
          <span>+00 (123) 456 789 0</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Shoes store. All rights reserved</p>
        <div className="footer-icon">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterClient;
