import React from 'react'
import { Link } from 'gatsby'
import { FaBars, FaTimes } from 'react-icons/fa'

import headerStyle from '../styles/header.module.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.state = {
            expanded: false
        }
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
            <header>
                <nav>
                    <div className={headerStyle.logo}>
                        <Link to="/">
                            <h1>Nicky Yim</h1>
                        </Link>
                        <button onClick={this.toggleMenu} className={headerStyle.burger}>
                            {menuIcon}
                        </button>
                    </div>
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
                </nav>
            </header>
        )
    }
}

export default Header
