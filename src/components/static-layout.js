import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { GlobalStyle, Body, ButtonStyle } from '../styles/global-styles'
import Theme from '../components/theme'
import SEO from '../components/seo'

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 15px;
    background-color: ${({ theme }) => theme.coverBg};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    h1 {
        font-weight: bold;
        font-size: 32px;
        color: ${({ theme }) => theme.primaryColor};
    }

    p {
        font-size: 24px;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.secondaryColor};
    }
`

const HomeButton = styled(Link)`
    ${ButtonStyle}
    width: 200px;
    text-align: center;
    color: ${({ theme }) => theme.secondaryColor};
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.secondaryColor};

    :hover {
        color: ${({ theme }) => theme.fontColor};
        background-color: ${({ theme }) => theme.secondaryColor};
        border: 2px solid ${({ theme }) => theme.secondaryColor};
    }
`

const StaticLayout = props => {
    return (
        <Theme>
            <GlobalStyle />
            <Body>
                <SEO />
                <Container>
                    <Wrapper>
                        {props.children}
                        <HomeButton to="/">Return Home</HomeButton>
                    </Wrapper>
                </Container>
            </Body>
        </Theme>
    )
}

export default StaticLayout
