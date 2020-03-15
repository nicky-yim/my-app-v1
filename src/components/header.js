import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaBars, FaTimes } from 'react-icons/fa'

import Logo from './logo'
import ToggleSwitch from './toggle-switch'

const Nav = styled.nav`
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: 0.3s;

    ${({ isScrolled, isExpanded, theme }) =>
        (isScrolled || isExpanded) &&
        `
        box-shadow: ${theme.boxShadow} 0 1px 5px 0;
        background-color: ${theme.menuBg};
    `}
`

const NavWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1388px) {
        width: 80%;
    }

    @media (max-width: 992px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

const NavMenu = styled.div`
    margin: auto 25px;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
        padding: 0 20px;
        margin: auto: 15px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Burger = styled.button`
    display: none;
    font-size: 1.5em;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.4s;

    :hover {
        color: ${({ theme }) => theme.secondaryColor};
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        ${({ isExpanded }) =>
            isExpanded ? `display: flex;` : `display: none;`}
        width: 100%;
        flex-direction: column;
    }
`

const NavListItem = styled.li`
    list-style: none;
    margin: 0 25px;

    @media (max-width: 992px) {
        margin: 0 15px;
    }

    @media (max-width: 768px) {
        margin: 20px;
    }
`

const NavListLink = styled.a`
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    transition: color .3s;

    :hover {
        color ${({ theme }) => theme.secondaryColor};
        border-bottom: 2px solid;
    }
`

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false,
            isScrolled: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        window.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll, { passive: true })
        window.removeEventListener('mousedown', this.handleClick, false)
    }

    toggleMenu = () => {
        this.setState({
            isExpanded: !this.state.isExpanded,
        })
    }

    handleScroll = () => {
        let scrollTop = document.body !== undefined ? document.body.scrollTop : 0

        this.setState({
            isScrolled: (window.pageYOffset || scrollTop) > 0,
        })
    }

    handleClick = e => {
        if (this.node.contains(e.target)) {
            return
        }

        this.setState({ isExpanded: false })
    }

    render() {
        const menuIcon = this.state.isExpanded ? <FaTimes /> : <FaBars />

        return (
            <Nav
                isScrolled={this.state.isScrolled}
                isExpanded={this.state.isExpanded}
                ref={node => (this.node = node)}
            >
                <NavWrapper>
                    <NavMenu>
                        <Logo onClick={() => scrollTo('body')} />
                        <Burger onClick={this.toggleMenu}>{menuIcon}</Burger>
                    </NavMenu>
                    <NavList isExpanded={this.state.isExpanded}>
                        <NavListItem>
                            <NavListLink onClick={() => scrollTo('#about')}>
                                About
                            </NavListLink>
                        </NavListItem>
                        <NavListItem>
                            <NavListLink onClick={() => scrollTo('#projects')}>
                                Projects
                            </NavListLink>
                        </NavListItem>
                        <NavListItem>
                            <NavListLink onClick={() => scrollTo('#contact')}>
                                Contact
                            </NavListLink>
                        </NavListItem>
                        <NavListItem>
                            <ToggleSwitch
                                isDarkMode={this.props.isDarkMode}
                                toggleTheme={this.props.toggleTheme}
                            />
                        </NavListItem>
                    </NavList>
                </NavWrapper>
            </Nav>
        )
    }
}

export default Header
