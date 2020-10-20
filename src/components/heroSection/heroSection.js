import React from 'react';
import "./heroSection.css";
import Logo from "../../assets/images/logo.png";

const HeroSection = () => {
    return (
        <div className="hero-container">
           <nav className="desktop-nav">
               <img id="logo" src={Logo} alt="diary logo" />
               <ul className="desktop-nav-items">
                   <li className="nav-item">
                       Home
                   </li>
                   <li className="nav-item">
                        Articles
                   </li>
                   <li className="nav-item">
                       Profiles
                   </li>
                   <li className="nav-item">
                       Privacy Policy
                   </li>
               </ul>
           </nav>
           <div className="hero-section">
               <h3 className="hero-message">
                   Documenting Milestones
               </h3>
               <button className="primary-button-type">
                   Read my diary <span role="img" aria-label="wink">😉</span>
               </button>
           </div>
        </div>
    )
}

export default HeroSection
