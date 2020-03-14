import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

import { FaBars, FaTimes } from "react-icons/fa"

import Logo from "./logo"

const Nav = styled.nav`
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: 0.3s;

    ${({ isScrolled, isExpanded }) =>
        (isScrolled || isExpanded) &&
        `
        box-shadow: rgba(0, 0, 0, .2) 0 1px 5px 0;
        background-color: #f6f7f7;
    `}
`

const NavWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

const NavMenu = styled.div`
    width: 50%;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Burger = styled.button`
    display: none;
    font-size: 1.5em;
    text-decoration: none;
    color: #000;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.4s;

    :hover {
        color: #666;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

const NavList = styled.ul`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

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
    color: #000;
    transition: color .3s;

    :hover {
        color #666;
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
        window.addEventListener("scroll", this.handleScroll, { passive: true })
        window.addEventListener("mousedown", this.handleClick, false)
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll, {
            passive: true,
        })
        window.removeEventListener("mousedown", this.handleClick, false)
    }

    toggleMenu = () => {
        this.setState({
            isExpanded: !this.state.isExpanded,
        })
    }

    handleScroll = () => {
        let scrollTop =
            document.body !== undefined ? document.body.scrollTop : 0

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
                ref={node => this.node = node}
            >
                <NavWrapper>
                    <NavMenu>
                        <Logo onClick={() => scrollTo("body")} />
                        <Burger onClick={this.props.toggleTheme}>
                            <FaTimes />
                        </Burger>
                        <Burger onClick={this.toggleMenu}>{menuIcon}</Burger>
                    </NavMenu>
                    <NavList isExpanded={this.state.isExpanded}>
                        <NavListItem>
                            <NavListLink onClick={() => scrollTo("#about")}>
                                About
                            </NavListLink>
                        </NavListItem>
                        <NavListItem>
                            <NavListLink onClick={() => scrollTo("#projects")}>
                                Projects
                            </NavListLink>
                        </NavListItem>
                        <NavListItem>
                            <NavListLink onClick={() => scrollTo("#contact")}>
                                Contact
                            </NavListLink>
                        </NavListItem>
                    </NavList>
                </NavWrapper>
            </Nav>
        )
    }
}

export default Header
