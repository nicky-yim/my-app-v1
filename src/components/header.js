import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { FaBars, FaTimes } from 'react-icons/fa'

import Logo from './logo'

import headerStyle from '../styles/header.module.scss'

const Nav = styled.nav`
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: .3s;

    ${({ isScrolled }) => isScrolled && `
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

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.state = {
            expanded: false,
            isScrolled: false
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll, { passive: true })
    }

    handleScroll = () => {
        let scrollTop = document.body !== undefined ? document.body.scrollTop : 0;

        this.setState({
            isScrolled: (window.pageYOffset || scrollTop) > 0
        })
    }

    toggleMenu = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const menuIcon = this.state.expanded ? <FaTimes /> : <FaBars />
        const navListClass = `${headerStyle.navList} ${this.state.expanded ? headerStyle.active : ''}`

        return (
            <Nav isScrolled={this.state.isScrolled}>
                <NavWrapper>
                    <NavMenu>
                        <Logo onClick={() => scrollTo('body')} />
                        <button onClick={this.toggleMenu} className={headerStyle.burger}>
                            {menuIcon}
                        </button>
                    </NavMenu>
                    <ul className={navListClass}>
                        <li>
                            <Link to="/about" className={headerStyle.navItem} activeClassName={headerStyle.navItemActive}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className={headerStyle.navItem} activeClassName={headerStyle.navItemActive}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={headerStyle.navItem} activeClassName={headerStyle.navItemActive}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </NavWrapper>
            </Nav>
        )
    }
}

export default Header
