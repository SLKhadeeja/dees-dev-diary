import React from "react"
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDev,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer>
      <ul className="nav">
        <li>Home</li>
        <li>Articles</li>
        <li>Contact Me</li>
      </ul>

      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faMedium} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDev} />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
