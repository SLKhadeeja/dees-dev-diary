import React from "react"
import "./diaryPageHeader.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { faBook, faHome } from "@fortawesome/free-solid-svg-icons"

const DiaryPageHeader = () => {
  return (
    <div className="diary-header">
      <div className="main-header">
        <h3>DEE'S DEV DIARY</h3>
        <div className="links">
          <Link to="/#home">
            <FontAwesomeIcon class="diary-nav-item" icon={faHome} />
          </Link>
          <Link to="/#articles">
            <FontAwesomeIcon className="diary-nav-item" icon={faBook} />
          </Link>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default DiaryPageHeader
