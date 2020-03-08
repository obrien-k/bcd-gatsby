require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `BigCom.DEV`,
    description: `BigCom.DEV + Gatsby Example Starter`,
    author: `Kyle O'Brien`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bigcom-dev-gatsby`,
        short_name: `bcgatsby`,
        start_url: `/`,
        background_color: `#34313f`,
        theme_color: `#34313f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      resolve: "gatsby-source-bigcommerce",
      options: {
        clientId: process.env.CLIENT,
        secret: process.env.SECRET,
        accessToken: process.env.TOKEN,
        storeHash: process.env.HASH,
        preview: true,
        logLevel: "info",
        nodeName: "BigCommerceNode",
        endpoints: {
          BigCommerceProducts: "/catalog/products?include=images",
          BigCommerceCategories: "/catalog/categories",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
