import React from 'react'
import Layout from '../components/layout'

import homeStyle from '../styles/index.module.scss'

const Contact = () => {
    return (
        <Layout>
            <div className={homeStyle.greeting}>
                <h1>Contact</h1>
            </div>
        </Layout>
    )
}

export default Contact
