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
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import HeaderCLient from "./HeaderClient";
import FooterClient from "./FooterClient";
const ClientLayout = () => {
  return (
    <div>
      <HeaderCLient />
      <main>
        <Outlet />
      </main>
      <FooterClient />
    </div>
  );
};

export default ClientLayout;
