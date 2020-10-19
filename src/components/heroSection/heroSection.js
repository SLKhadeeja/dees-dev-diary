import React from 'react';
import "./heroSection.css";
import Logo from "../../assets/images/logo.png";
import ProfileImg from "../../assets/images/profile.jpg";

const HeroSection = () => {
    return (
        <div className="hero-container">
           <nav className="desktop-nav">
               <img id="logo" src={Logo} alt="diary logo" />
               <ul className="nav-items">
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
           <div class="introduction">
               <img id="profile" src={ProfileImg} alt="DeeDee" />
               <div className="hero-quote">
               <p className="intro-message">
                   Hey, I am Khadija but you can call me DeeDee. This blog is a documentation of my journey through tech.
                   I believe the documenting milestones and achievements makes it easier and certainly more fun to measure progress. 
               </p>
               <button className="primary-button-type">
                   Read my diary <span role="img">😉</span>
               </button>
           </div>
           </div>
        </div>
    )
}

export default HeroSection
