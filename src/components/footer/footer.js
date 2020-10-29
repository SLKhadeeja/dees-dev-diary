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
import { faBook, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer>
      <ul className="nav">
        <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
        <li><a href="#articles"><FontAwesomeIcon icon={faBook} /> Articles</a></li>
      </ul>

      <ul>
        <li>
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=khadijaladan67@gmail.com&tf=1" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/SLKhadeeja" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://gihub.com/SLKhadeeja" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/khadija-ladan/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_deedee_l/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@SLKhadeeja" target="_blank">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
        <li>
          <a href="https://web.facebook.com/khadijah.ladan.9" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://dev.to/slkhadeeja" target="_blank">
            <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
