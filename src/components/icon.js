import React from 'react'
import * as FontAwesome from 'react-icons/fa'

import iconStyle from '../styles/icon.module.scss'

const Icon = props => {
    const icon = React.createElement(FontAwesome[props.iconName])

    return (
        <a className={iconStyle.iconWrapper} href={props.href} title={props.title} target="_blank" rel="noopener noreferrer">
            <div className={iconStyle.icon}>
                {icon}
            </div>
        </a>
    )
}

export default Icon
