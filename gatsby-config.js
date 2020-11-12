module.exports = {
  siteMetadata: {
    title: `Dee's Dev Diary`,
    author: `Khadija Ladan`,
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/diaryPages`,
        name: "diary",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-prismjs"
        ],
      },
    },
    {
      resolve: `gatsby-remark-shiki`,
      options: {
        theme: 'slack-theme-dark-mode',
      },
    },
  ],
};
