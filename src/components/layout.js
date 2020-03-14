import React from 'react'
import styled, { createGlobalStyle} from 'styled-components'

import Theme from './theme'

import Meta from './meta'
import Header from './header'
import Footer from './footer'


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', 'Segoe UI', 'Arial';
        transition: color .3s ease-out, background .3s ease-out;
    }
`

const Body = styled.div`
    background: ${props => props.theme.background};
    font-weight: 300;
`

const Content = styled.div`
    width: 100%;
`

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isDarkMode: false }
        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme = () => {
        console.log(this.state.isDarkMode);
        this.setState({
            isDarkMode: !this.state.isDarkMode
        })
    }

    render() {
        return (
            <Theme isDarkMode={this.state.isDarkMode}>
                <Body>
                    <GlobalStyle />
                    <Meta />
                    <Header toggleTheme={this.toggleTheme} />
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer />
                </Body>
            </Theme>
        )
    }
}

export default Layout
