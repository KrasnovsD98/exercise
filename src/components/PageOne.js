import React from "react";
import { dashboard } from "../img";
import "./styles/pageone.css";

export default function PageOne() {
  return (
    <section>
      <div className="wrapper">
        <div className="main-container">
          <div className="imgContainer">
            <img src={dashboard} />
          </div>
          <div className="topics">
            <div className="head2">
              <h2>ACH Pull. Payments as they should be.</h2>
            </div>
            <div className="topic2">
              <div className="item1">
                <h3 className="topicHeader">Forget expensive fees</h3>
                <p className="topicText">
                  GoCardless collects ACH Pull payments. Meaning no card fees.
                  ACH Pull with GoCardless is also fully automated, reducing all
                  payments costs by 56%.
                </p>
              </div>
              <div className="item2">
                <h3 className="topicHeader">Get paid faster</h3>
                <p className="topicText">
                  Receive your money in just 4 days with ACH Pull from
                  GoCardless. Save time and improve your cash flow.
                </p>
              </div>
              <div className="item3">
                <h3 className="topicHeader">Automate admin</h3>
                <p className="topicText">
                  Easily see the status of any payment from any customer, any
                  time. And if you connect GoCardless to your accounting system,
                  reconciliation is automatic.
                </p>
              </div>
              <div className="item4">
                <h3 className="topicHeader">Stop fraud in its tracks </h3>
                <p className="topicText">
                  Without the extra link in the chain, like physical devices
                  such as cards or checks, ACH Pull payments are more secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
