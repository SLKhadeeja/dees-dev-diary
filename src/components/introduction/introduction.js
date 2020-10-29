import React from "react"
import "./introduction.css"

const Introduction = () => {
  return (
    <div id="home" className="introduction">
      <div className="hero-quote">
        <p className="intro-message">
          Hey there{" "}
          <span role="img" aria-label="wink">
            😸
          </span>{" "}
          , I'm DeeDee. I believe documenting milestones and achievements makes
          it easier and certainly more fun to measure progress.
        </p>
      </div>
      <div className="quote-banner">
        <p className="quote">
          "Remember to celebrate milestones as you prepare for the road ahead"
        </p>
        <p className="author">- Nelson Mandela</p>
      </div>
    </div>
  )
}

export default Introduction
