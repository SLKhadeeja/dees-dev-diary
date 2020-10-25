import React from "react"
import "./diaryPreviewCard.css"
import CardImage from "../../assets/images/baby-steps-into-tech.jpg"
import Button from "../button/button"

const DiaryPreviewCard = () => {
  return (
    <div className="card">
      <div className="date">19 Jun, 2020</div>
      <img className="preview-img" src={CardImage} alt="baby-using-laptop" />
      <div className="card-contents">
        <h3 className="card-title">My baby steps into tech</h3>
        <p className="diary-preview">
          An inside story on how I started out in tech. The beginning of my
          journey as a developer
        </p>
        <Button>Read this</Button>
      </div>
    </div>
  )
}

export default DiaryPreviewCard
