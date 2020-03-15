import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FaBriefcase, FaDesktop, FaLaptop } from 'react-icons/fa'

import Card from "../components/card"

import {
    SectionOffset,
    SectionContainer,
    SectionDivider,
    SectionContent,
} from '../styles/global-styles'

const ProjectsOffset = styled(SectionOffset)`
    background-color: ${({ theme}) => theme.secondaryColor};
`

const ProjectsSection = styled(SectionContainer)`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryColor};
`

const ProjectsDivider = styled(SectionDivider)`
    background: ${({ theme }) => theme.secondaryColor};
`

const ProjectsIcon = styled(FaLaptop)`
    color: ${({ theme }) => theme.background};
    font-size: 2em;
`

const Projects = () => {
    const { github } = useStaticQuery(graphql`
    {
        github {
            user(login: "nicky-yim") {
                pinnedRepositories(first: 6) {
                    nodes {
                        name
                        description
                        url
                        openGraphImageUrl
                        imageFile {
                            childImageSharp {
                                fixed(width: 400, height: 400, quality: 90, fit: CONTAIN) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }`)

    return (
        <section id="projects">
            <ProjectsOffset />
            <ProjectsSection>
                <ProjectsDivider>
                    <ProjectsIcon />
                </ProjectsDivider>
                <SectionContent>
                    {
                        github.user.pinnedRepositories.nodes.map(item =>
                            <Card {...item} />
                        )
                    }
                </SectionContent>
            </ProjectsSection>
        </section>
    )
}

export default Projects
