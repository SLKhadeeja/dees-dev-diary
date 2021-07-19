import React from "react";
import "./button.css";

const Button = ({ customIdStyle, children }) => {
  return (
    <button id={`${customIdStyle}`} className="primary-button-type">
      {children}
    </button>
  );
};

export default Button;
