module.exports = {
  siteMetadata: {
    title: `Dee's Dev Diary`,
    siteUrl: `https://dees-dev-diary.netlify.app/`,
    description: `Documenting Milestones`,
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
          apiKey: process.env.API_KEY || "none",
          authDomain: "dees-dev-diary.firebaseapp.com",
          databaseURL: "https://dees-dev-diary.firebaseio.com",
          projectId: "dees-dev-diary",
          storageBucket: "dees-dev-diary.appspot.com",
          messagingSenderId: process.env.MESSAGING_SENDER_ID || "none",
          appId: process.env.APP_ID || "none",
          measurementId: process.env.MEASUREMENT_ID || "none",
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      } 
    },
  ],
};
