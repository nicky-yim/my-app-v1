import React from 'react'
import Layout from '../components/layout'

import homeStyle from '../styles/index.module.scss'

const About = () => {
    return (
        <Layout>
            <div className={homeStyle.greeting}>
                <h1>About me:</h1>
                <h2>I'm Nicky, a software developer from Toronto, Canada.</h2>
            </div>
        </Layout>
    )
}

export default About
