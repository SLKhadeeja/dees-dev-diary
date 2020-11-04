import React from "react";
import DiaryPageHeader from "../components/headers/diaryPageHeader/diaryPageHeader";
import DiaryBody from "../components/diaryBody/diaryBody";
import Footer from "../components/footer/footer";
import DiaryPageFooter from "../components/footer/diaryPageFooter";

const DiaryPage = () => {
  return (
    <div className="diary-page">
      <DiaryPageHeader />
      <DiaryBody />
      <Footer />
      <DiaryPageFooter />
    </div>
  );
};

export default DiaryPage;
