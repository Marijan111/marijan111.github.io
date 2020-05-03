module.exports = {
  siteMetadata: {
    title: `Web Developer`,
    description: `This is my portfolio website built using GatsbyJS`,
    author: `Marijan Batarilo`,
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
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marijan Batarilo portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#f2eee9`,
        theme_color: `#f2eee9`,
        display: `minimal-ui`,
        icon: `src/images/logo.webp`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
