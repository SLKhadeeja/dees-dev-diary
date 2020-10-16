import React from 'react';
import "./heroSection.css";
import heroImage from "../../images/hero-image.jpg"

const HeroSection = () => {
    return (
        <div className="hero-container">
           <nav className="desktop-nav">
               <h1 id="blog-name">Dee's Dev Diary</h1>
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
           <div className="hero-quote">
               <p className="personal-quote">
                   Taking notes of little wins makes it easier to evaluate improvement
               </p>
               <button className="primary-button-type">
                   Read my diary 😉
               </button>
           </div>
        </div>
    )
}

export default HeroSection
