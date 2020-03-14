import React from 'react'
import styled from 'styled-components'

const Icky = styled.span`
    float: left;
    text-transform: none;
    color: #000;
    max-width: 0em;
    opacity: 0;
    transition: all .4s ease-in-out;
`

const NY = styled.span`
    float: left;
    color: #000;
    opacity: 1;
    transition: all .4s ease-in-out;
`

const IM = styled(NY)``

const Symbols = styled(NY)`
    color: #666;
`

const LogoLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    span {
        font-family: "Consolas", "Roboto Condensed", "Segoe UI", "Arial";
    }

    :hover {
        ${NY} {
            color: #666;
        }

        ${IM} {
            text-transform: none;
        }

        ${Symbols} {
            color: #ccc;
        }

        ${Icky} {
            color: #666;
            max-width: 3em;
            opacity: 1;
        }
    }
`

const Logo = (props) => {
    return (
        <LogoLink {...props}>
            <h1>
                <Symbols>&lt;</Symbols>
                <NY>N</NY>
                <Icky>icky&nbsp;</Icky>
                <NY>Y</NY>
                <IM>im</IM>
                <Symbols>&nbsp;/&gt;</Symbols>
            </h1>
        </LogoLink>
    )
}

export default Logo