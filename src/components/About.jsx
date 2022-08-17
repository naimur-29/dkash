import React from "react";
import "../styles/About.scss";

import aboutImg from "../assets/images/about.svg";

const About = () => {
  return (
    <section className="about-section-container" id="about">
      <div className="left">
        <img src={aboutImg} alt="a person holding a mobile" />
      </div>
      <div className="right">
        <div className="title">
          <p className="top">Digital Smart Wallet</p>
          <h1 className="heading">How It Works</h1>
        </div>
        <div className="paragraph">
          <h3 className="heading">1. Open a High Interest Checking Account</h3>
          <p className="description">
            Fund your bank account with a minimum balance of $100. Enroll in 3
            minutes or less!
          </p>
        </div>
        <div className="paragraph">
          <h3 className="heading">
            2. 10 point-of-sale transactions each month that are at least $10
            each.
          </h3>
          <p className="description">
            Be sure to use your rewards checking account as often as possible in
            order to accue APYI.
          </p>
        </div>
        <div className="paragraph">
          <h3 className="heading">3. Receive up to 5.50% APY</h3>
          <p className="description">
            The APY you earn will be based on your account balance and
            satisfying the transaction requirement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
