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
          fields {
            slug
          }
        frontmatter {
          id
          date
          title
          author
          description
          coverImage
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
      <div className="article-list">
        {posts.map(post => (
          <DiaryPreviewCard
            key={post.frontmatter.id}
            coverImage={post.frontmatter.coverImage}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            description={post.frontmatter.description}
            slug={post.fields.slug}
          />
        ))}
      </div>
      {isShowing && <Profiles hide={toggle} />}
      <Footer />
    </div>
  );
};

export default ArticleList;
