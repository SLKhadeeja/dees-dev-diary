import React from "react";
import "./sharing.css";

const Sharing = props => {
  const { slug } = props;
  let twitterShare = `http://twitter.com/share?text=Checkout this article by DeeDee - @SLKhadeeja &url=http://dees-dev-diary.netlify.app${slug}&hashtags=techtwitter`;
  let linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=http://dees-dev-diary.netlify.app${slug}`;
  return (
    <div className="share-section">
      <h5>Share: </h5>
      <a
        class="resp-sharing-button__link"
        href={twitterShare}
        target="_blank"
        rel="noreferrer"
        aria-label=""
      >
        <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
          <div
            aria-hidden="true"
            class="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
            </svg>
          </div>
        </div>
      </a>

      <a
        class="resp-sharing-button__link"
        href={linkedinShare}
        target="_blank"
        rel="noreferrer"
        aria-label=""
      >
        <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small">
          <div
            aria-hidden="true"
            class="resp-sharing-button__icon resp-sharing-button__icon--solid"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Sharing;
