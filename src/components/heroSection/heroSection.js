import React from "react"
import "./heroSection.css"
import Logo from "../../assets/images/logo.png"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <nav className="desktop-nav">
        <div>
          <img id="logo" src={Logo} alt="diary logo" />
          <h1 className="title">DEE'S DEV DIARY</h1>
        </div>
        <ul className="desktop-nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Articles</li>
          <li className="nav-item">Profiles</li>
          <li className="nav-item">Privacy Policy</li>
        </ul>
        <i className="fas fa-bars hamburger-menu"></i>
      </nav>
      <div className="hero-section">
        <h3 className="hero-message">Documenting Milestones</h3>
        <button className="primary-button-type">
          Read my diary{" "}
          <span role="img" aria-label="wink">
            😉
          </span>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
