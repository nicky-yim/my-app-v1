import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <h1>Nicky Yim</h1>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
