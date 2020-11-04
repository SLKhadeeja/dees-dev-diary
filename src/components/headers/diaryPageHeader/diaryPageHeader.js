import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import "./diaryPageHeader.css";

const DiaryPageHeader = () => {
  return (
    <div className="diary-header">
      <div className="main-header">
        <h3>DEE'S DEV DIARY</h3>
        <div className="links">
          <Link to="/">
            <FontAwesomeIcon class="diary-nav-item" icon={faHome} />
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
