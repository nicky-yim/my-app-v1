import React from 'react'
import Icon from './icon'

import footerStyle from '../styles/footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyle.footer}>

            <div className={footerStyle.footerContainer}>
                <Icon iconName="FaEnvelope" href="mailto:nicky.yim@outlook.com" title="Email" />
                <Icon iconName="FaGithub" href="https://github.com/nicky-yim" title="Github" />
                <Icon iconName="FaLinkedin" href="https://www.linkedin.com/in/nicky-yim" title="LinkedIn" />
            </div>
        </footer>
    )
}

export default Footer
