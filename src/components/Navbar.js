import React from "react";
import "./styles/navbar.css";
import { logo } from "./../img/index";

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo} />
      </a>
      <ul>
        <li>
          <a href="#">Why GoCardless?</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Partners</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#" className="login">
            Log in
          </a>
        </li>
        <li>
          <a href="#" className="signup">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}
