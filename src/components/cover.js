import React from 'react'
import styled, { keyframes } from 'styled-components'

import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaLongArrowAltDown } from 'react-icons/fa'

const CoverContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#f5f5f5 35%, #ededed 65%);
`

const Greeting = styled.div`
    display: flex;
    flex-direction: column;
`

const Hello = styled.h2`
    text-decoration: none;
    color: #666666;
`

const Name = styled.h1`
    font-weight: bold;
    font-size: 6em;
`

const Desc = styled.h2`
    text-align: right;
    color: #666666;
`

const Bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }
`

const ArrowContainer = styled.div`
    margin-top: 30px;
    text-align: center;
    animation: ${Bounce} 1s ease-in-out infinite;
`

const ArrowLink = styled.a`
    color: #333333;
    cursor: pointer;
    transition: .2s;

    :hover {
        color: #888888;
    }
`


const Cover = () => {
    return (
        <CoverContainer>
            <Greeting>
                <Hello>
                    Hello, I am
                </Hello>
                <Name>
                    Nicky Yim
                </Name>
                <Desc>
                    a software engineer from Toronto
                </Desc>
            </Greeting>
            <ArrowContainer>
                <ArrowLink onClick={() => scrollTo('#footer')}>
                    <h1>
                        <FaLongArrowAltDown />
                    </h1>
                </ArrowLink>
            </ArrowContainer>
        </CoverContainer>
    )
}

export default Cover