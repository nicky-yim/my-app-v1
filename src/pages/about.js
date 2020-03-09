import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyle from '../styles/about.module.scss'

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
        <Layout>
            <Head />
            <div className={aboutStyle.avatarContainer}>
                <Img fixed={myAvatar.childImageSharp.fixed} className={aboutStyle.avatar} />
            </div>
            <div className={aboutStyle.aboutMe}>
                <span>Hey, I'm <b>Nicky Yim</b>.</span>
                <p>
                    I'm a software developer from Toronto, who specializes in front-end development.
                </p>
                <p>
                    I began my journey as an <b>ASP.NET C#</b> software developer.
                </p>
                <p>
                    Lately, I've been learning <b>React</b> in my free time.
                    This site is proudly built by myself using <b>Gatsby</b>!
                </p>
                <p>
                    Things I've been working with recently:
                </p>
                <ul className={aboutStyle.list}>
                    <li>ASP.NET</li>
                    <li>C&#35; </li>
                    <li>HTML &amp; (S)CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Gatsby</li>
                </ul>
            </div>
        </Layout>
    )
}

export default About