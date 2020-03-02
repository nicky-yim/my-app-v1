import React from 'react'
import Layout from '../components/layout'

import homeStyle from '../styles/index.module.scss'

const Projects = () => {
    return (
        <Layout>
            <div className={homeStyle.greeting}>
                <h1>
                    Projects
                </h1>
            </div>
        </Layout>
    )
}

export default Projects
