import React from "react";
import firebase from "gatsby-plugin-firebase";
import "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./userInteraction.css";

const UserInteraction = props => {
  const { slug } = props;
  const [userInteraction, setUserInteraction] = React.useState(null);

  React.useEffect(() => {
    firebase
      .firestore()

      .collection(`userInteraction`)
      .onSnapshot(snapshot => {
        const posts = snapshot.docs
          .filter(doc => doc.data().slug === slug)
          .map(doc => {
            return { id: doc.id, ...doc.data() };
          });
        setUserInteraction(posts[0]);
        console.log(posts[0]);
      });
  }, [slug]);

  return (
    <div className="interaction-section">
      <div className="heart-star">
        <div className="single-interaction-div">
          <div className="interaction-icon heart">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <p className="heart-count count">1</p>
        </div>

        <div className="single-interaction-div">
          <div className="interaction-icon star">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className="star-count count">2</p>
        </div>
      </div>
    </div>
  );
};

export default UserInteraction;
