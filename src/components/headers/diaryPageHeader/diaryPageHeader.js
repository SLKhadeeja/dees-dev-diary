import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/logo.png";
import "./diaryPageHeader.css";

const DiaryPageHeader = () => {
  return (
    <div className="diary-header">
      <div className="main-header">
        <div className="diary-header-title">
          <img src={Logo} alt="blog logo" />
          <h3>DEE'S DEV DIARY</h3>
        </div>
        <div className="links">
          <Link to="/">
            <FontAwesomeIcon className="diary-nav-item" icon={faHome} />
          </Link>
          <Link to="/articleList">
            <FontAwesomeIcon className="diary-nav-item" icon={faBook} />
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default DiaryPageHeader;
