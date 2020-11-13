import React from "react";
import { Link } from "gatsby";
import Button from "../button/button";
import Header from "../headers/header/header";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div id="home" className="hero-container">
      <Header />
      <div className="hero-section">
        <h3 className="hero-message">Documenting Milestones</h3>
        <Link to="/articleList">
          <Button>
            Read my diary{" "}
            <span role="img" aria-label="wink">
              😉
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
