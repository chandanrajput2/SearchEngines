import React from "react";
import "./Navbar.css";
import { MdSettings, MdClear } from "react-icons/md";
import Publish from "./Publish"

const Navber = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="menu-link">
          <ul>
            <li>
              <p>Publish</p>
            </li>
            <li>
              <p>saved</p>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul className="social-desktop">
            <li>
              <MdSettings color="blue" />
            </li>
            <li>
              <MdClear color="blue"/>
            </li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <Publish />
      </section>
    </>
  );
};

export default Navber;
