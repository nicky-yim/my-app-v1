import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaAngleDoubleDown } from 'react-icons/fa'

const CoverContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.coverBg};
`

const Greeting = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;

    h1 {
        font-weight: bold;
        font-size: 6em;
        color: ${({ theme }) => theme.primaryColor};
    }

    h2 {
        text-align: right;
        color: ${({ theme }) => theme.secondaryColor};
    }

    h3 {
        color: ${({ theme }) => theme.secondaryColor};
    }
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
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    transition: 0.2s;

    :hover {
        color: ${({ theme }) => theme.secondaryColor};
    }
`

const Cover = () => {
    const { data } = useStaticQuery(graphql`
        {
            data: markdownRemark(frontmatter: { title: { eq: "cover" } }) {
                html
            }
        }
    `)

    return (
        <CoverContainer>
            <Greeting dangerouslySetInnerHTML={{ __html: data.html }} />
            <ArrowContainer>
                <ArrowLink onClick={() => scrollTo('#footer')}>
                    <h1>
                        <FaAngleDoubleDown />
                    </h1>
                </ArrowLink>
            </ArrowContainer>
        </CoverContainer>
    )
}

export default Cover
