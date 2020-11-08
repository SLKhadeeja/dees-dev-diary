import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = ({ show }) => {
  return (
    <nav className="navbar">
      <div>
        <h1 className="title">DEE'S DEV DIARY</h1>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> <p>Home</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/articleList">
            <FontAwesomeIcon icon={faBook} /> <p>Articles</p>
          </Link>
        </li>
        <li className="nav-item profiles">
          <a href="#profiles" onClick={show} onKeyDown={show}>
            <FontAwesomeIcon icon={faUser} /> <p>Profiles</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
