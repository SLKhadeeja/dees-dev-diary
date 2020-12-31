import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserInteraction from "../userInteraction/userInteraction";
import { parseDate } from "../../utils/parseDate";
import "./diaryBody.css";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import Sharing from "../sharing/sharing";

const DiaryBody = props => {
  const { id, title, date, html, slug } = props;

  return (
    <div className="diary-body">
      <h2>{title}</h2>
      <p>
        <FontAwesomeIcon icon={faPenAlt} /> {parseDate(date)}
      </p>
      <div className="main-content" dangerouslySetInnerHTML={html} />
      <UserInteraction slug={slug} id={id} />
      <Sharing slug={slug} />
    </div>
  );
};

export default DiaryBody;
