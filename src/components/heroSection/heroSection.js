import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import Button from "../button/button"
import "./heroSection.css"
import Logo from "../../assets/images/logo.png"

const HeroSection = ({ show }) => {
  return (
    <div id="home" className="hero-container">
      <nav className="navbar">
        <div>
          <img id="logo" src={Logo} alt="diary logo" />
          <h1 className="title">DEE'S DEV DIARY</h1>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#home">
              <FontAwesomeIcon icon={faHome} /> <p>Home</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#articles">
              <FontAwesomeIcon icon={faBook} /> <p>Articles</p>
            </a>
          </li>
          <li className="nav-item profiles">
            <a href="#profiles" onClick={show} onKeyDown={show}>
              <FontAwesomeIcon icon={faUser} /> <p>Profiles</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-section">
        <h3 className="hero-message">Documenting Milestones</h3>
        <Button>
          Read my diary{" "}
          <span role="img" aria-label="wink">
            😉
          </span>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
