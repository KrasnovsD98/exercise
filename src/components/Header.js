import React from "react";
import { homepage } from "./../img/index";
import "./styles/header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="wrapper">
        <div className="textHandler">
          <p className="upperText">Simple and secure ACH Pull payments</p>
          <h1>
            THERE'S A BETTER <br />
            WAY TO GET PAID
          </h1>
          <p>
            With ACH Pull from GoCardless, automatically pull <br /> payments
            from your customers. Receive more cents on <br />
            the dollar, get paid faster and safer.
          </p>
          <div className="btnHandler">
            <a href="#" className="free">
              Get 90 days fee free
            </a>
            <a href="#" className="cs">
              Contact sales
            </a>
          </div>
          <a href="#" className="tac">
            *Terms and Conditions apply
          </a>
        </div>
        <div className="imgHandler">
          <img src={homepage} alt="" />
        </div>
      </div>
    </header>
  );
}
