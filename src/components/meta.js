import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Meta = () => {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    author
                    description
                    keywords
                }
            }
        }
    `)

    return (
        <Helmet>
            <title>{site.siteMetadata.title}</title>
            <meta name="author" content={site.siteMetadata.author} />
            <meta name="description" content={site.siteMetadata.description} />
            <meta name="keywords" content={site.siteMetadata.keywords} />
        </Helmet>
    )
}

export default Meta