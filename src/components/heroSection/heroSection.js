import React from "react";
import { faHome, faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import Header from "../headers/header/header";
import "./heroSection.css";

const HeroSection = ({ show }) => {
  return (
    <div id="home" className="hero-container">
      <Header />
      <div className="hero-section">
        <h3 className="hero-message">Documenting Milestones</h3>
        <a href="#articles">
          <Button>
            Read my diary{" "}
            <span role="img" aria-label="wink">
              😉
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
