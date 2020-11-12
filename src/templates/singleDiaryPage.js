import React from "react";
import { graphql } from "gatsby";
import DiaryPageHeader from "../components/headers/diaryPageHeader/diaryPageHeader";
import DiaryBody from "../components/diaryBody/diaryBody";
import Footer from "../components/footer/footer";
import DiaryPageFooter from "../components/footer/diaryPageFooter";

export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const DiaryPage = ({ data }) => {
  const post = data.markdownRemark;
  console.log(data);

  return (
    <div className="diary-page">
      <DiaryPageHeader />
      <DiaryBody title={post.frontmatter.title} html={{ __html: post.html }} />
      <Footer />
      <DiaryPageFooter />
    </div>
  );
};

export default DiaryPage;
