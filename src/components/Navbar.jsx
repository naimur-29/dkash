import React, { useState } from "react";
import "../styles/Navbar.scss";
import logo from "../assets/logo/dkash-logo.svg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <section className="navbar-section-container">
      <nav className="nav-container">
        <div className="right">
          <div className="logo-container">
            <img src={logo} alt="" className="logo" />
            <div className="text">dKash</div>
          </div>
          <ul className="menus">
            <li
              className={activeMenu === "home" ? "item active" : "item"}
              onClick={() => {
                setActiveMenu("home");
              }}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={activeMenu === "about" ? "item active" : "item"}
              onClick={() => {
                setActiveMenu("about");
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={activeMenu === "features" ? "item active" : "item"}
              onClick={() => {
                setActiveMenu("features");
              }}
            >
              <a href="#features">Features</a>
            </li>
            <li
              className={activeMenu === "blog" ? "item active" : "item"}
              onClick={() => {
                setActiveMenu("blog");
              }}
            >
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="left">
          <button className="btn login">Log In</button>
          <button className="btn signup">Sign Up</button>
          <div
            className={mobileMenu ? "mobile-nav active" : "mobile-nav"}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
      <div className={mobileMenu ? "mobile-menu active" : "mobile-menu"}>
        <ul className="menus">
          <li
            className={activeMenu === "home" ? "item active" : "item"}
            onClick={() => {
              setActiveMenu("home");
              setMobileMenu(false);
            }}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={activeMenu === "about" ? "item active" : "item"}
            onClick={() => {
              setActiveMenu("about");
              setMobileMenu(false);
            }}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={activeMenu === "features" ? "item active" : "item"}
            onClick={() => {
              setActiveMenu("features");
              setMobileMenu(false);
            }}
          >
            <a href="#features">Features</a>
          </li>
          <li
            className={activeMenu === "blog" ? "item active" : "item"}
            onClick={() => {
              setActiveMenu("blog");
              setMobileMenu(false);
            }}
          >
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
