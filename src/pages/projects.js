import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

import projectsStyle from "../styles/projects.module.scss"

const Projects = () => {
    const { github } = useStaticQuery(graphql`
    {
        github {
            viewer {
                repositories(isFork: false, first: 10, privacy: PUBLIC) {
                    nodes {
                        id
                        name
                        description
                        url
                        usesCustomOpenGraphImage
                        openGraphImageUrl
                        imageFile {
                            childImageSharp {
                                fixed(width: 250, height: 250, quality: 100, fit: CONTAIN) {
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
                        object(expression: "master:README.md") {
                            ... on GitHub_Blob {
                                text
                            }
                        }
                    }
                }
            }
        }
    }`)

    return (
        <Layout>
            <div className={projectsStyle.cardsContainer}>
                {
                    github.viewer.repositories.nodes.map(item =>
                        <Card {...item} />
                    )
                }
            </div>
        </Layout>
    )
}

export default Projects