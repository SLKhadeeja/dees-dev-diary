import React, {useContext, useEffect} from "react";
import { FirebaseContext } from "gatsby-plugin-firebase"
import { Helmet } from "react-helmet";
import HeroSection from "../components/heroSection/heroSection";
import Introduction from "../components/introduction/introduction";
import Footer from "../components/footer/footer";
import Profiles from "../components/profiles/profiles";
import useModal from "../utils/useModal";
import { useFirebase } from "gatsby-plugin-firebase";

const Home = () => {
  const { isShowing, toggle } = useModal();

  const firebase = useContext(FirebaseContext)
useEffect(() => {
    if (!firebase) {
      return
    }
    
    firebase
      .analytics()
      .logEvent("visited_about_us")
  }, [firebase])

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
