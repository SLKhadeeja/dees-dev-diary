import React from "react";
import "./diaryPreviewCard.css";
import Button from "../button/button";
import { Link } from "gatsby";
import { parseDate } from "../../utils/parseDate";

const DiaryPreviewCard = props => {
  const { date, title, description, slug, coverImage } = props;
  var CardImage = require(`../../assets/images/${coverImage}`);

  return (
    <div className="card">
      <div className="date">{parseDate(date)}</div>
      <img className="preview-img" src={CardImage} alt={`${coverImage}`} />
      <div className="card-contents">
        <h3 className="card-title">{title}</h3>
        <p className="diary-preview">{description}</p>
        <Link to={slug}>
          <Button customIdStyle="read-more">Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default DiaryPreviewCard;
