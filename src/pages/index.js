import React from "react"
import HeroSection from "../components/heroSection/heroSection"
import Introduction from "../components/introduction/introduction"
import TopicList from "../components/topicList/topicList"
import Footer from "../components/footer/footer"
import Profiles from "../components/profiles/profiles"
import ContactMe from "../components/contactMe/contactMe"
import useModal from "../utils/useModal"

const Home = () => {
  const { isShowing, toggle } = useModal()
  return (
    <div>
      <HeroSection show={toggle} />
      <Introduction />
      <TopicList />
      {isShowing && <Profiles hide={toggle} />}
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Home
