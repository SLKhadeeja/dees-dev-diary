import React from "react";
import "./diaryPreviewCard.css";
import CardImage from "../../assets/images/baby-steps-into-tech.jpg";
import Button from "../button/button";
import { Link } from "gatsby";

const DiaryPreviewCard = props => {
  const { date, title, description } = props;
  return (
    <div className="card">
      <div className="date">{date}</div>
      <img className="preview-img" src={CardImage} alt="baby-using-laptop" />
      <div className="card-contents">
        <h3 className="card-title">{title}</h3>
        <p className="diary-preview">{description}</p>
        <Link to="/diaryPage">
          <Button>Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default DiaryPreviewCard;
