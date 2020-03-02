import React from 'react'
import * as FontAwesome from 'react-icons/fa'

import iconStyle from '../styles/icon.module.scss'

const Icon = props => {
    const icon = React.createElement(FontAwesome[props.iconName])

    return (
        <div className={iconStyle.iconWrapper}>
            <a className={iconStyle.icon} href={props.href} title={props.title} target="_blank" rel="noopener noreferrer">
                {icon}
            </a>
        </div>
    )
}

export default Icon
