import React from "react"
import HeroSection from "../components/heroSection/heroSection"
import Introduction from "../components/introduction/introduction"
import TopicList from "../components/topicList/topicList"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <TopicList />
    </div>
  )
}

export default Home
