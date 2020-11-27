import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserInteraction from "../userInteraction/userInteraction";
import "./diaryBody.css";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";

const DiaryBody = props => {
  const { title, date, html, slug } = props;

  return (
    <div className="diary-body">
      <h2>{title}</h2>
      <p>
        <FontAwesomeIcon icon={faPenAlt} /> {date}
      </p>
      <div className="main-content" dangerouslySetInnerHTML={html} />
      <UserInteraction slug={slug} />
    </div>
  );
};

export default DiaryBody;
