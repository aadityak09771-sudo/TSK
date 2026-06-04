import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo-wrapper">
      <img
        src="/assets/images/home/TKS.png"
        alt="Topper Siksha Kendra"
        className="logo-image"
      />

      <div className="logo-text">
        <div className="logo-line1">
          Topper's
        </div>

        <div className="logo-line2">
          Siksha <span>Kendra</span>
        </div>
      </div>
    </Link>
  );
};