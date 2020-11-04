import React from "react";
import TopicList from "../components/topicList/topicList";
import Footer from "../components/footer/footer";
import Profiles from "../components/profiles/profiles";
import useModal from "../utils/useModal";
import Header from "../components/headers/header/header";

const ArticleList = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="index-page">
      <Header />
      <TopicList />
      {isShowing && <Profiles hide={toggle} />}
      <Footer />
    </div>
  );
};

export default ArticleList;
