import React from "react"
import DiaryPreviewCard from "../diaryPreviewCard/diaryPreviewCard"
import "./topicList.css"

const TopicList = () => {
  return (
    <div class="diary-topics-section">
      <h1 class="section-name">Diary Pages</h1>
      <div class="diary-list">
        <DiaryPreviewCard />
      </div>
    </div>
  )
}

export default TopicList
