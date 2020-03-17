import React from 'react'
import styled from 'styled-components'
import * as FontAwesome from 'react-icons/fa'

const IconWrapper = styled.a`
    width: 4em;
    height: 4em;
    margin: 10px;
    line-height: 4.25em;
    text-indent: 0;
    color: ${({ theme }) => theme.primaryColor};
    border-width: 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.primaryColor};
    border-radius: 100%;
    transition: all 0.3s;

    :hover {
        color: ${({ theme }) => theme.secondaryColor};
        border-color: ${({ theme }) => theme.secondaryColor};
    }
`

const IconItem = styled.div`
    font-size: 2em;
`

const Icon = props => {
    const icon = React.createElement(FontAwesome[props.icon])

    return (
        <IconWrapper
            href={props.href}
            title={props.title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <IconItem>{icon}</IconItem>
        </IconWrapper>
    )
}

export default Icon
