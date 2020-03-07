import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import MyAvatar from '../images/me.jpg'

import aboutStyle from '../styles/about.module.scss'

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className={aboutStyle.avatarContainer}>
                <img src={MyAvatar} alt="Me" className={aboutStyle.avatar} />
            </div>
            <div className={aboutStyle.aboutMe}>
                <h2>Hey, I'm <u>Nicky Yim</u>.</h2>
                <p>
                    I'm a software developer from Toronto, who specializes in front-end development.
                </p>
                <p>
                    I began my journey as an <u>ASP.NET C#</u> software developer.
                </p>
                <p>
                    Lately, I've been learning <u>React</u> in my free time. This site is proudly built by myself using <u>Gatsby</u>!
                </p>
                <p>
                    Things I've been working with recently:
                    <ul className={aboutStyle.list}>
                        <li>ASP.NET</li>
                        <li>C&#35; </li>
                        <li>HTML &amp; (S)CSS</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Gatsby</li>
                    </ul>
                </p>
            </div>
        </Layout>
    )
}

export default About
