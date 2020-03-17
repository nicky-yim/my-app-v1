import React from 'react'
import styled, { css } from 'styled-components'
import { FaComments } from 'react-icons/fa'

import {
    SectionOffset,
    SectionContainer,
    SectionDivider,
    SectionContent,
    Heading,
    ButtonStyle,
} from '../styles/global-styles'
import { navigate } from 'gatsby'

const ContactOffset = styled(SectionOffset)`
    background-color: ${({ theme }) => theme.background};
`

const ContactContainer = styled(SectionContainer)`
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.fontColor};
`

const ContactDivider = styled(SectionDivider)`
    background: ${({ theme }) => theme.background};
`

const ContactIcon = styled(FaComments)`
    color: ${({ theme }) => theme.secondaryColor};
    font-size: 2em;
`

const ContactContent = styled.form`
    width: 80%;
    margin: auto;
    padding-bottom: 30px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const TextStyle = css`
    width: 100%;
    padding: 15px;
    margin: 15px auto;
    font-size: 16px;
    outline: none;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 2px solid ${({ theme }) => theme.fontColor};

    ::placeholder {
        color: ${({ theme }) => theme.tertiaryColor};
    }

    :focus {
        color: ${({ theme }) => theme.primaryColor};
        background-color: ${({ theme }) => theme.fontColor};
        box-shadow: ${({ theme }) => theme.boxShadow} 0 0 3x 3px;

        ::placeholder {
            color: ${({ theme }) => theme.secondaryColor};
        }
    }
`

const Label = styled.label`
    width: 100%;
`

const TextBox = styled.input`
    ${ButtonStyle}
    ${TextStyle}
`

const TextArea = styled.textarea`
    ${ButtonStyle}
    ${TextStyle}
`

const HiddenDiv = styled.div`
    display: none;
`

const SubmitButton = styled.button`
    ${ButtonStyle}
    outline: none;
    user-select: none;
    cursor: pointer;
    font-size: 16px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 2px solid ${({ theme }) => theme.fontColor};

    :hover {
        color: ${({ theme }) => theme.secondaryColor};
        background-color: ${({ theme }) => theme.background};
        border: 2px solid ${({ theme }) => theme.background};
    }
`

function encode(data) {
    return Object.keys(data)
        .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
}

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.setState({})
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': `Contact Form`,
                ...this.state,
            }),
        })
            .then(() => navigate('/thank-you'))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <section id="contact">
                <ContactOffset />
                <ContactContainer>
                    <ContactDivider>
                        <ContactIcon />
                    </ContactDivider>
                    <SectionContent>
                        <Heading>Contact Nicky</Heading>
                        <ContactContent
                            name="Contact Form"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={this.handleSubmit}
                        >
                            <HiddenDiv>
                                <Label name="form-name" htmlFor="form-name">
                                    <input
                                        type="hidden"
                                        id="form-name"
                                        name="form-name"
                                        aria-label="form-name"
                                        value="Contact Form"
                                        onChange={this.handleChange}
                                        required="true"
                                    />
                                </Label>
                                <Label name="bot-field" htmlFor="bot-field">
                                    <input
                                        type="hidden"
                                        id="bot-field"
                                        name="bot-field"
                                        aria-label="bot-field"
                                        onChange={this.handleChange}
                                    />
                                </Label>
                            </HiddenDiv>
                            <Label name="name" htmlFor="name">
                                <TextBox
                                    type="text"
                                    name="name"
                                    aria-label="name"
                                    placeholder="Who are you?"
                                    onChange={this.handleChange}
                                    required="true"
                                />
                            </Label>
                            <Label name="email" htmlFor="email">
                                <TextBox
                                    type="email"
                                    name="email"
                                    aria-label="email"
                                    placeholder="What's your email address?"
                                    onChange={this.handleChange}
                                    required="true"
                                />
                            </Label>
                            <Label name="subject" htmlFor="subject">
                                <TextBox
                                    type="text"
                                    name="subject"
                                    aria-label="subject"
                                    placeholder="What's the subject?"
                                    onChange={this.handleChange}
                                    required="true"
                                />
                            </Label>
                            <Label name="message" htmlFor="message">
                                <TextArea
                                    rows="5"
                                    name="message"
                                    aria-label="message"
                                    placeholder="What's the message?"
                                    onChange={this.handleChange}
                                    required="true"
                                />
                            </Label>
                            <Label name="submit" htmlFor="submit">
                                <SubmitButton type="submit">
                                    Get in touch with Nicky
                                </SubmitButton>
                            </Label>
                        </ContactContent>
                    </SectionContent>
                </ContactContainer>
            </section>
        )
    }
}

export default Contact
