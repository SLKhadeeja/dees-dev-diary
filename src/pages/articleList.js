import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer/footer";
import Profiles from "../components/profiles/profiles";
import useModal from "../utils/useModal";
import Header from "../components/headers/header/header";
import DiaryPreviewCard from "../components/diaryPreviewCard/diaryPreviewCard";

export const pageQuery = graphql`
  query MyQuery {
    diary: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          id
          date
          title
          author
          description
        }
      }
    }
  }
`;

const ArticleList = ({ data }) => {
  const { isShowing, toggle } = useModal();
  const { posts } = data.diary;

  return (
    <div className="index-page">
      <Header show={toggle} />
      <div className="post-list">
        {posts.map(post => (
          <DiaryPreviewCard
            key={post.frontmatter.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
          />
        ))}
      </div>
      {isShowing && <Profiles hide={toggle} />}
      <Footer />
    </div>
  );
};

export default ArticleList;
