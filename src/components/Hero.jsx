import React from "react";
import "../styles/Hero.scss";
import MobileImg from "../assets/images/Mobile.svg";

const Hero = () => {
  return (
    <section className="hero-section-container" id="home">
      <div className="left">
        <p className="info">Digital Smart Wallet</p>
        <h1 className="title">
          Digital <span>Payment</span> For Everyone.
        </h1>
        <p className="description">
          We bring together everything that's required to build websites and
          apps that accept payments and send payouts globally. We are the best
          platform.
        </p>
        <div className="bar">
          <input type="text" className="email" placeholder="Your email here" />
          <button className="btn">Get Started</button>
        </div>
        <p className="info">
          *We'll respect the inbox and never share your email.
        </p>
      </div>
      <div className="right">
        <img src={MobileImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
