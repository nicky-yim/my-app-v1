import React from 'react'
import styled from 'styled-components'
import { FaUser, FaSuitcase, FaComments } from 'react-icons/fa'

import Layout from '../components/layout'
import Cover from '../components/cover'
import About from '../components/about'

const Greeting = styled.section`
    background-color: #666;
    color: #fff;
    position: relative;
    text-align: center;
`

const GreetingContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    height: 100%;
    min-height: 50vh;
`

const Divider = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: #ededed;
    top: -50px;
    left: 0;
    right: 0;
    position: absolute;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DividerIcon = styled(FaUser)`
    color: #666;
    font-size: 2em;
`

const Home = () => {
    return (
        <Layout>
            <Cover />
            <About />
        </Layout>
    )
}

export default Home
