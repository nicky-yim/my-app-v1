import React from 'react'
import { Link } from 'gatsby'

import headerStyle from '../styles/header.module.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <div className={headerStyle.logo}>
                    <Link to="/">
                        <h1>Nicky Yim</h1>
                    </Link>
                </div>
                <ul className={headerStyle.navList}>
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

export default Header
