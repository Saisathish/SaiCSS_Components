import React from "react";
import './loaders.css';

function LoaderIcons() {
  return (
    <div className="flex">
      <div className="classic">Loading...</div>
      <div className="bars"></div>
      <div className="dots"></div>
      <div className="progress"></div>
      <div className="pulsing"></div>
      <div className="spinner"></div>
    </div>
  );
};


export default LoaderIcons;