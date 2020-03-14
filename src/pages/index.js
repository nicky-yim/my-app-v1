import React from 'react'

import Layout from '../components/layout'
import styled from 'styled-components'

import { FaUser, FaSuitcase, FaComments } from 'react-icons/fa'


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
            <Greeting>
                <Divider>
                    <DividerIcon />
                </Divider>
                <GreetingContent>
                    <h1>Hello!</h1>
                    <h2>I'm Nicky, a software developer from Toronto, Canada.</h2>
                </GreetingContent>
            </Greeting>
        </Layout>
    )
}

export default Home
