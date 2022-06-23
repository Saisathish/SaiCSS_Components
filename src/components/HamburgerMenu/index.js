import React from "react";
import './hamburgerMenu.css';

function HamburgerMenu() {
  return (
    <div className="hamburger-menu">
      <input id="menu_toggle" type="checkbox" />
      <label className="menu_btn" for="menu_toggle">
        <span></span>
      </label>
      <ul className="menu_box">
        <li><a className="menu_item" href="#">Home</a></li>
        <li><a className="menu_item" href="#">About</a></li>
        <li><a className="menu_item" href="#">Team</a></li>
        <li><a className="menu_item" href="#">Contact</a></li>
        <li><a className="menu_item" href="#">Instagram</a></li>
      </ul>
    </div>
  );
};


export default HamburgerMenu;