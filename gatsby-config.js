const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Nicky Yim | Software Developer',
    author: 'Nicky Yim',
    description: 'Nicky Yim is a software developer from Toronto, specializing in front-end development.',
    keywords: 'Nicky Yim, Nicky, Yim, software developer, Toronto, software engineer, front-end developer, web developer, ASP.NET, C#, javascript, React, GatsbyJS'
  },
  plugins: [
    'gatsby-plugin-sass',
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
            family: `Permanent Marker`
          },
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
    }
  ]
}
