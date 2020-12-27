import React, { useState } from "react";
import firebase from "gatsby-plugin-firebase";
import "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./userInteraction.css";

const UserInteraction = props => {
  const { slug, id } = props;
  const [clicked, setClick] = useState({
    clickedHeart: false,
    clickedStar: false,
  });
  const [userInteraction, setUserInteraction] = useState({
    hearts: 0,
    stars: 0,
  });

  const incerementHearts = () => {
    firebase
      .firestore()
      .collection(`userInteraction`)
      .doc(id)
      .update({ hearts: userInteraction.hearts + 1 })
      .catch(err => {
        console.error("error adding comment: ", err);
      });

    setClick({ ...clicked, clickedHeart: true });
  };

  const incerementStars = () => {
    firebase
      .firestore()
      .collection(`userInteraction`)
      .doc(id)
      .update({ stars: userInteraction.stars + 1 })
      .catch(err => {
        console.error("error adding comment: ", err);
      });

    setClick({ ...clicked, clickedStar: true });
  };

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
      });
  }, [slug]);

  return (
    <div className="interaction-section">
      <div className="heart-star">
        <div
          className="single-interaction-div"
          role="button"
          onClick={incerementHearts}
          onKeyDown={incerementHearts}
          tabIndex={0}
        >
          <div
            className={
              clicked.clickedHeart
                ? "interaction-icon clickedHeart"
                : "interaction-icon heart"
            }
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <p className="heart-count count">{userInteraction.hearts}</p>
        </div>

        <div
          className="single-interaction-div"
          role="button"
          onClick={incerementStars}
          onKeyDown={incerementStars}
          tabIndex={0}
        >
          <div
            className={
              clicked.clickedStar
                ? "interaction-icon clickedStar"
                : "interaction-icon star"
            }
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className="star-count count">{userInteraction.stars}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInteraction;
