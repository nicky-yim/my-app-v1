import React from 'react'
import styled, { createGlobalStyle} from 'styled-components'

import Meta from './meta'
import Header from './header'
import Footer from './footer'
import Cover from './cover'


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', 'Segoe UI', 'Arial';
    }
`

const Body = styled.div`
    background: #ededed;
    font-weight: 300;
`

const Content = styled.div`
    text-align: center;
    width: 100%;
`

const Layout = (props) => {
    return (
        <Body>
            <GlobalStyle />
            <Meta />
            <Header />
            <Cover />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </Body>
    )
}

export default Layout
