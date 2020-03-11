import React from 'react'
import Img from 'gatsby-image'

import cardStyle from '../styles/card.module.scss'

const Card = props => {
    return (
        <a className={cardStyle.cardContainer}
            href={props.url}
            alt={props.name}
            target="_blank"
            rel="noopener noreferrer">
            <div className={cardStyle.card}>
                {
                    props.usesCustomOpenGraphImage &&
                    <div className={cardStyle.preview}>
                        <Img fixed={props.imageFile.childImageSharp.fixed} />
                    </div>
                }
                <div className={cardStyle.desc}>
                    {props.name}
                </div>
            </div>
        </a>
    )
}

export default Card