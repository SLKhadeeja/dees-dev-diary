import React from "react";
import CardImage from "../../assets/images/baby-steps-into-tech.jpg";
import "./diaryBody.css";

const DiaryBody = props => {
  const { title, html } = props;

  return (
    <div className="diary-body">
      <h2>{title}</h2>
      <img className="header-img" src={CardImage} alt="baby-using-laptop" />
      <div dangerouslySetInnerHTML={html} />
    </div>
  );
};

export default DiaryBody;
