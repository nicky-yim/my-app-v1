import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyle from '../styles/about.module.scss'

const Projects = () => {
    const { github } = useStaticQuery(graphql`
        query GetGitHubRepos {
            github {
                viewer {
                    repositories(isFork: false, last: 10) {
                        nodes {
                            name
                            description
                            url
                            usesCustomOpenGraphImage
                            openGraphImageUrl
                        }
                    }
                }
            }
        }   
    `)

    return (
        <Layout>
            <Head />
            <div className={aboutStyle.aboutMe}>
                <ul className={aboutStyle.list}>
                    {
                        github.viewer.repositories.nodes.map(function(item) {
                            return (
                                <li>
                                    <a href={item.url}
                                        alt={item.name}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
    )
}

export default Projects