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
          {
            resolve: "gatsby-remark-prismjs",
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-shiki`,
      options: {
        theme: "slack-theme-dark-mode",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDO0nT3P2qQeeWFeAt2Z-Yx4iXr04N4u3I",
          authDomain: "dees-dev-diary.firebaseapp.com",
          databaseURL: "https://dees-dev-diary.firebaseio.com",
          projectId: "dees-dev-diary",
          storageBucket: "dees-dev-diary.appspot.com",
          messagingSenderId: "125711597226",
          appId: "1:125711597226:web:93bdbcc3fae3325d7a5ad3",
          measurementId: "G-DBHVQWHBY9",
        },
      },
    },
  ],
};
