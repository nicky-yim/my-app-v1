import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FaBriefcase } from 'react-icons/fa'

import Card from "../components/card"

import {
    SectionOffset,
    SectionContainer,
    SectionDivider,
    SectionContent,
    Heading,
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

const ProjectsContent = styled(SectionContent)`
    width: 80%;

    @media (max-width: 1200px) {
        width: 100%;
    }
`

const ProjectsIcon = styled(FaBriefcase)`
    color: ${({ theme }) => theme.background};
    font-size: 2em;
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const RepoButton = styled.a`
    width: 300px;
    padding: 15px 45px;
    margin: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    background-color: ${({ theme }) => theme.fontColor};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.secondaryColor};
    transition: all .3s;

    :hover {
        color: ${({ theme }) => theme.fontColor};
        background-color: ${({ theme }) => theme.secondaryColor};
        border: 2px solid ${({ theme }) => theme.secondaryColor};
    }
`

const Projects = () => {
    const { github, site } = useStaticQuery(graphql`
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
                                fluid(maxWidth: 400, maxHeight: 350, quality: 90, fit: CONTAIN) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        },
        site {
            siteMetadata {
                repo
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
                <ProjectsContent>
                    <Heading>Nicky's Projects</Heading>
                    <CardsContainer>
                        {
                            github.user.pinnedRepositories.nodes.map(item =>
                                <Card key={item.name} {...item} />
                            )
                        }
                    </CardsContainer>
                    <RepoButton
                        href={site.siteMetadata.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        View More on GitHub
                    </RepoButton>
                </ProjectsContent>
            </ProjectsSection>
        </section>
    )
}

export default Projects
