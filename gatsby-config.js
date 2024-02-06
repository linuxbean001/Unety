require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const proxy = require("http-proxy-middleware")

module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    author: 'Unety',
    title: `Unety`,
    description: `Resources for engineers to always land project financing`,
    siteUrl: `https://unety.io`,
    social: {
      facebook: `unety-io`,
      instagram: `unetyio`,
      linkedin: `unety-io`,
      twitter: `unetyio`,
    },
  },
  plugins: [
    `gatsby-plugin-layout`,
    'gatsby-plugin-sass',
    'gatsby-plugin-meta-redirect',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/layouts/index.js`)
        },
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-118091102-1',
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unety`,
        short_name: `Unety`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#993333`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
