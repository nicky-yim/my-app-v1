import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'

import {
    SectionOffset,
    SectionContainer,
    SectionDivider,
    SectionContent,
    Heading,
} from '../styles/global-styles'

const AboutOffset = styled(SectionOffset)`
    background-color: ${({ theme }) => theme.background};
`

const AboutContainer = styled(SectionContainer)`
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.fontColor};
`

const AboutDivider = styled(SectionDivider)`
    background: ${({ theme }) => theme.background};
`

const AboutIcon = styled(FaUser)`
    color: ${({ theme }) => theme.secondaryColor};
    font-size: 2em;
`

const AvatarContainer = styled.div`
    margin: 15px;
`

const Avatar = styled(Img)`
    width: 250px;
    height: 250px;
    margin: auto;
    border-radius: 100%;
    transition: all 0.5s;

    :hover {
        transform: scaleX(-1);
    }
`

const AboutMe = styled.div`
    width: 80%;
    margin: auto;
    text-align: left;
    font-size: 18px;

    p {
        margin: 15px auto;
    }

    code {
        font-family: ${({ theme }) => theme.fonts.fonts.code};
    }

    ul {
        columns: 2;
        list-style: none;

        li:before {
            content: '\\203A';
            padding-right: 5px;
            color: ${({ theme }) => theme.tertiaryColor};
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const About = () => {
    const { myAvatar, data } = useStaticQuery(graphql`
        {
            myAvatar: file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                    fixed(width: 250, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            data: markdownRemark(frontmatter: { title: { eq: "about" } }) {
                html
                frontmatter {
                    heading
                }
            }
        }
    `)

    return (
        <section id="about">
            <AboutOffset />
            <AboutContainer>
                <AboutDivider>
                    <AboutIcon />
                </AboutDivider>
                <SectionContent>
                    <Heading>
                        {data.frontmatter.heading}
                    </Heading>
                    <AvatarContainer>
                        <Avatar fixed={myAvatar.childImageSharp.fixed} />
                    </AvatarContainer>
                    <AboutMe dangerouslySetInnerHTML={{ __html: data.html }} />
                </SectionContent>
            </AboutContainer>
        </section>
    )
}

export default About
