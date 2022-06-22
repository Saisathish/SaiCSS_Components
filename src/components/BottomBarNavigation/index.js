import React from "react";
import './bottomBarNavigation.css';

function BottomBarNavigation() {
  return (
    <div className="container">
      <div className="box"><i className="fa-solid fa-house"></i></div>
      <div className="box"><i className="fa-solid fa-magnifying-glass"></i></div>
      <div className="box"><i className="fa-solid fa-heart"></i></div>
      <div className="box"><i className="fa-solid fa-user"></i></div>
    </div>
  );
};


export default BottomBarNavigation;