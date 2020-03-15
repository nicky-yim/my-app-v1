import React from 'react'
import { FaUser, FaSuitcase, FaComments } from 'react-icons/fa'

import Layout from '../components/layout'
import Cover from '../components/cover'
import About from '../components/about'
import Projects from '../components/projects'

const Home = () => {
    return (
        <Layout>
            <Cover />
            <About />
            <Projects />
        </Layout>
    )
}

export default Home
