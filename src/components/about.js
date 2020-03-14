import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'


const AboutSection = styled.section`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.fontColor};
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AboutDivider = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: ${({ theme }) => theme.background};
    top: -50px;
    left: 0;
    right: 0;
    position: absolute;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AboutIcon = styled(FaUser)`
    color: ${({ theme }) => theme.colors.secondaryColor};
    font-size: 2em;
`

const AboutContent = styled.div`
    padding: 80px;
    width: 50%;
    height: 100%;
`

const AvatarContainer = styled.div`
    margin: 10px;
`

const Avatar = styled(Img)`
    width: 250px;
    height: 250px;
    margin: auto;
    border: 5px solid ${({ theme }) => theme.colors.fontColor};
    border-radius: 100%;
`

const AboutMe = styled.div`
    width: 80%;
    margin: auto;
    text-align: left;

    p {
        margin: 15px auto;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const ItemList = styled.ul`
    columns: 2;
    list-style: none;

    li:before {
        content: "\\203A";
        padding-right: 5px;
    }
`


const About = () => {
    const { myAvatar } = useStaticQuery(graphql`
        query {
            myAvatar: file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                    fixed(width: 250, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <AboutSection id='about'>
            <AboutDivider>
                <AboutIcon />
            </AboutDivider>
            <AboutContent>
                <AvatarContainer>
                    <Avatar fixed={myAvatar.childImageSharp.fixed} />
                </AvatarContainer>
                <AboutMe>
                    <span>
                        Hey, I'm <b>Nicky Yim</b>.
                    </span>
                    <p>
                        I'm a software developer from Toronto, who specializes in
                        front-end development.
                    </p>
                    <p>
                        I began my journey as an <b>ASP.NET C#</b> software
                        developer.
                    </p>
                    <p>
                        Lately, I've been learning <b>React</b> in my free time.
                        This site is proudly built by myself using <b>Gatsby</b>!
                    </p>
                    <p>Things I've been working with recently:</p>
                    <ItemList>
                        <li>ASP.NET</li>
                        <li>C&#35; </li>
                        <li>HTML &amp; (S)CSS</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Gatsby</li>
                    </ItemList>
                </AboutMe>
            </AboutContent>
        </AboutSection>
    )
}

export default About