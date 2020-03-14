const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Nicky Yim | Software Engineer',
    author: 'Nicky Yim',
    description: 'Nicky Yim is a software engineer from Toronto, specializing in front-end development.',
    keywords: 'Nicky Yim, Nicky, Yim, software engineer, Toronto, software developer, front-end developer, web developer, ASP.NET, C#, javascript, React, GatsbyJS'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass', /* TO BE REMOVED */
    'gatsby-plugin-smoothscroll',
    'react-icons',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Condensed`,
            variants: [`300`, `400`, `700`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicky Yim`,
        short_name: `Nicky Yim`,
        start_url: `/`,
        background_color: `#f6f7f7`,
        theme_color: `#f6f7f7`,
        display: `standalone`,
      },
    },
  ]
}
