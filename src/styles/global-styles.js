import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.fonts.fonts.normal};
    }
`

const Body = styled.div`
    background: ${({ theme }) => theme.background};
    font-weight: 300;
    font-size: 16px;
    max-width: 100vw;
    overflow-x: hidden;
`

const Content = styled.div`
    width: 100%;
`

const SectionOffset = styled.div`
    width: 100%;
    min-height: 10vh;
`

const SectionContainer = styled.div`
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SectionDivider = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    top: -50px;
    left: 0;
    right: 0;
    position: absolute;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SectionContent = styled.div`
    padding-top: 80px;
    padding-left: 15px;
    padding-right: 15px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 992px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Heading = styled.h1`
    margin-bottom: 20px;
`

const ButtonStyle = css`
    width: 300px;
    text-decoration: none;
    padding: 15px 45px;
    margin: 20px;
    border-radius: 5px;
    transition: all 0.3s;
`

export {
    GlobalStyle,
    Body,
    Content,
    SectionOffset,
    SectionContainer,
    SectionDivider,
    SectionContent,
    Heading,
    ButtonStyle,
}
