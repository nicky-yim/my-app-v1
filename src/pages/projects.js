import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"

import aboutStyle from "../styles/about.module.scss"

const Projects = () => {
    const { github } = useStaticQuery(gitHubQuery)

    return (
        <Layout>
            <Head />
            <div className={aboutStyle.aboutMe}>
                {github.viewer.repositories.nodes.map(function(item) {
                    let hasImg = item.usesCustomOpenGraphImage

                    return (
                        <a
                            href={item.url}
                            alt={item.name}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Img fixed={item.imageFile.childImageSharp.fixed} />
                        </a>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Projects

export const gitHubQuery = graphql`
    query {
        github {
            viewer {
                repositories(isFork: false, first: 10) {
                    nodes {
                        id
                        name
                        description
                        url
                        usesCustomOpenGraphImage
                        openGraphImageUrl
                        imageFile {
                            childImageSharp {
                                fixed(
                                    width: 250
                                    height: 250
                                    quality: 100
                                    fit: CONTAIN
                                ) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                        repositoryTopics(first: 5) {
                            nodes {
                                topic {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
