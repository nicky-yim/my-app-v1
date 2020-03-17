import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Icon from './icon'

const FooterContainer = styled.footer`
    text-align: center;
    color: ${({ theme }) => theme.fontColor};
    margin: 20px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Footer = () => {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    sites {
                        title
                        icon
                        href
                    }
                }
            }
        }
    `)

    return (
        <FooterContainer>
            <IconContainer>
                {site.siteMetadata.sites.map(item => (
                    <Icon {...item} />
                ))}
            </IconContainer>
        </FooterContainer>
    )
}

export default Footer
