import React, { useState } from 'react'
import { GlobalStyle, Body, Content } from '../styles/global-styles'

import Theme from './theme'
import SEO from './seo'
import Header from './header'
import Footer from './footer'

const Layout = props => {
    const [isDarkMode, toggleTheme] = useState(false)

    return (
        <Theme isDarkMode={isDarkMode}>
            <GlobalStyle />
            <Body>
                <SEO />
                <Header
                    isDarkMode={isDarkMode}
                    toggleTheme={() => toggleTheme(!isDarkMode)}
                />
                <Content>{props.children}</Content>
                <Footer />
            </Body>
        </Theme>
    )
}

export default Layout
