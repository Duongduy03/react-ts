import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const HeaderCLient = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <a href="/" className="logo">
            <img src="src/images/logo-3.png" alt="" />
          </a>
        </div>

        <div className="header-menu">
          <ul className="menu">
            <li className="menu-item">
              <a href="/" className="menu-link is-active">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="/products" className="menu-link">
                Shop
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                Blogs
              </a>
            </li>
            <li className="menu-item">
              <a href="" className="menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="header-icons">
          <Link to="">
            <FontAwesomeIcon icon={faSearch} />
          </Link>

          <Link to="/signin">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <Link to="">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderCLient;
