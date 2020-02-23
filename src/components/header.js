import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <div>
            <h1>Nicky Yim</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
