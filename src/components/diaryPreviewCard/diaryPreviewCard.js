import React from "react"
import "./diaryPreviewCard.css"
import CardImage from "../../assets/images/baby-steps-into-tech.jpg"
import Button from "../button/button"

const DiaryPreviewCard = () => {
  return (
    <div class="card">
      <div class="date">19 Jun, 2020</div>
      <img class="preview-img" src={CardImage} alt="baby-using-laptop" />
      <div class="card-contents">
        <h3 class="card-title">My baby steps into tech</h3>
        <p class="diary-preview">
          An inside story on how I started out in tech. The beginning of my
          journey as a developer
        </p>
        <Button>Read this</Button>
      </div>
    </div>
  )
}

export default DiaryPreviewCard
