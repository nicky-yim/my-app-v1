import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { FaBriefcase } from 'react-icons/fa'

import Card from '../components/card'

import {
    SectionOffset,
    SectionContainer,
    SectionDivider,
    SectionContent,
    Heading,
    ButtonStyle,
} from '../styles/global-styles'

const ProjectsOffset = styled(SectionOffset)`
    background-color: ${({ theme }) => theme.secondaryColor};
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const RepoButton = styled.a`
    ${ButtonStyle}
    color: ${({ theme }) => theme.secondaryColor};
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.secondaryColor};

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
                                    fixed(
                                        width: 400
                                        height: 350
                                        quality: 50
                                        fit: CONTAIN
                                    ) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
            site {
                siteMetadata {
                    repo
                }
            }
        }
    `)

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
                        {github.user.pinnedRepositories.nodes.map(item => (
                            <Card key={item.name} {...item} />
                        ))}
                    </CardsContainer>
                    <RepoButton
                        role="button"
                        href={site.siteMetadata.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View more on GitHub
                    </RepoButton>
                </ProjectsContent>
            </ProjectsSection>
        </section>
    )
}

export default Projects
