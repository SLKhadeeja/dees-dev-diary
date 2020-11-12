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
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-remark-shiki`,
      options: {
        theme: 'zeit', // Default: 'nord'
      },
    },
  ],
};
