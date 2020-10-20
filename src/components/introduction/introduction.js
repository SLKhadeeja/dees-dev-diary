import React from 'react';
import "./introduction.css";
import ProfileImg from "../../assets/images/profile.jpg";

const Introduction = () => {
    return (
        <div class="introduction">
            <div className="introduction-container">
            <img id="profile" src={ProfileImg} alt="DeeDee" />
               <div className="hero-quote">
               <p className="intro-message">
                   Hey, I am Khadija but you can call me DeeDee. This blog is a documentation of my journey through tech.
                   I believe the documenting milestones and achievements makes it easier and certainly more fun to measure progress. 
               </p>
            </div>
           </div>
           </div>
    )
}

export default Introduction;
