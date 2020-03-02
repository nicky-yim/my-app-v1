import React from 'react'

import Header from './header'
import Footer from './footer'

import layoutStyle from '../styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <Header />
            <div className={layoutStyle.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
