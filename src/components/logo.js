import React from 'react'
import styled from 'styled-components'

const Icky = styled.span`
    float: left;
    text-transform: none;
    color: ${({ theme }) => theme.primaryColor};
    max-width: 0em;
    opacity: 0;
    transition: all .4s ease-in-out;
`

const NY = styled.span`
    float: left;
    color: ${({ theme }) => theme.primaryColor};
    opacity: 1;
    transition: all .4s ease-in-out;
`

const IM = styled(NY)``

const Symbols = styled(NY)`
    color: ${({ theme }) => theme.secondaryColor};
`

const LogoLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    span {
        font-family: ${({ theme }) => theme.fonts.fonts.code};
    }

    :hover {
        ${NY} {
            color: ${({ theme }) => theme.secondaryColor};
        }

        ${IM} {
            text-transform: none;
        }

        ${Symbols} {
            color: ${({ theme }) => theme.tertiaryColor};
        }

        ${Icky} {
            color: ${({ theme }) => theme.secondaryColor};
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