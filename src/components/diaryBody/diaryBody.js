import React from "react";
import "./diaryBody.css";

const DiaryBody = props => {
  const { title, html } = props;

  return (
    <div className="diary-body">
      <h2>{title}</h2>
      {/* <img className="header-img" src={CardImage} alt="baby-using-laptop" /> */}
      <div dangerouslySetInnerHTML={html} />
    </div>
  );
};

export default DiaryBody;
