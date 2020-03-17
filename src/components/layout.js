import React from 'react'
import { GlobalStyle, Body, Content } from '../styles/global-styles'

import Theme from './theme'
import SEO from './seo'
import Header from './header'
import Footer from './footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isDarkMode: false }
        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme = () => {
        this.setState({
            isDarkMode: !this.state.isDarkMode,
        })
    }

    render() {
        return (
            <Theme isDarkMode={this.state.isDarkMode}>
                <GlobalStyle />
                <Body>
                    <SEO />
                    <Header
                        isDarkMode={this.state.isDarkMode}
                        toggleTheme={this.toggleTheme}
                    />
                    <Content>{this.props.children}</Content>
                    <Footer />
                </Body>
            </Theme>
        )
    }
}

export default Layout
