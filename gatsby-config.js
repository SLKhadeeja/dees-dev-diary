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
        features: {     
          auth: false,       
          database: false,  
          firestore: false,
          storage: false,    
          messaging: false, 
          functions: false,  
          performance: false, 
          analytics:true,    
         }, 
        credentials: {
          apiKey: process.env.API_KEY || "none",
          authDomain: process.env.AUTH_DOMAIN || "none",
          databaseURL: process.env.DATABASE_URL || "none",
          projectId: process.env.PROJECT_ID || "none",
          storageBucket: process.env.STORAGE_BUCKET || "none",
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
