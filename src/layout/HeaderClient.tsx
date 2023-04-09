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
  const user = JSON.parse(localStorage.getItem("user") as string);
  // console.log(user.image);
  const imageUser = () => {
    if (user) {
      return (
        <Link to="/">
          <div className="user-author">
            <img src={user.image} alt="" />
          </div>
        </Link>
      );
    } else {
      return (
        <Link to="/signin">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      );
    }
  };

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

          <Link to="">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </Link>
          {imageUser()}
        </div>
      </div>
    </header>
  );
};

export default HeaderCLient;
