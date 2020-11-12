import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/heroSection/heroSection";
import Introduction from "../components/introduction/introduction";
import Footer from "../components/footer/footer";
import Profiles from "../components/profiles/profiles";
import useModal from "../utils/useModal";

const Home = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="index-page">
      <Helmet title="Dee's Dev Diary" defer={false} />
      <HeroSection show={toggle} />
      <Introduction />
      {isShowing && <Profiles hide={toggle} />}
      <Footer />
    </div>
  );
};

export default Home;
