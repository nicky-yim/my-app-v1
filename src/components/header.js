import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h1>Nicky Yim</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
