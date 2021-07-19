import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDev,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./profiles.css";

const Profiles = ({ hide }) => {
  return (
    <div id="profiles" className="profiles-background" onClick={hide} aria-label="close modal"
    onKeyDown={hide}>
      <div className="content">
      <div className="top">
        <button
          className="close-button"
          aria-label="close button"
          onClick={hide}
          onKeyDown={hide}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="list">
        <p className="list-item">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=khadijaladan67@gmail.com&tf=1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> khadijaladan67@gmail.com{" "}
          </a>
        </p>
        <div className="list-item">
          <div className="icons">
            <p>
              <a
                href="https://twitter.com/SLKhadeeja"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </p>
            <p>
              <a
                href="https://github.com/SLKhadeeja"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
            <p>
              <a
                href="https://medium.com/@SLKhadeeja"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </p>
            <p>
              <a
                href="https://dev.to/slkhadeeja"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDev} />
              </a>
            </p>
          </div>
          @SLKhadeeja
        </div>
        <div className="list-item">
          <div className="icons">
            <p>
              <a
                href="https://www.linkedin.com/in/khadija-ladan/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
            <p>
              <a
                href="https://web.facebook.com/khadijah.ladan.9"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </p>
          </div>
          Khadija Ladan
        </div>
        <p className="list-item">
          <a
            href="https://www.instagram.com/_deedee_l/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> _deedee_l
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Profiles;
