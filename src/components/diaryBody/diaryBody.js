import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./diaryBody.css";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";

const DiaryBody = props => {
  const { title, date, html } = props;

  return (
    <div className="diary-body">
      <h2>{title}</h2>
      <p><FontAwesomeIcon icon={faPenAlt} /> {date}</p>
      <div className="main-content" dangerouslySetInnerHTML={html} />
    </div>
  );
};

export default DiaryBody;
