import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.css'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
