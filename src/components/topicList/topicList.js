import React from "react";
import DiaryPreviewCard from "../diaryPreviewCard/diaryPreviewCard";
import "./topicList.css";

const TopicList = () => {
  return (
    <div id="articles" className="diary-topics-section">
      <div className="diary-list">
        <DiaryPreviewCard />
      </div>
    </div>
  );
};

export default TopicList;
