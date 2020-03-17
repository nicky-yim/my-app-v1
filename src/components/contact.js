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

const TextBox = styled.input`
    ${ButtonStyle}
    ${TextStyle}
`

const TextArea = styled.textarea`
    ${ButtonStyle}
    ${TextStyle}
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

const Contact = () => {
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
                        name="contact"
                        method="POST"
                        data-netlify="true"
                    >
                        <input
                            type="hidden"
                            name="form-name"
                            value="Contact Form"
                        />
                        <TextBox
                            type="text"
                            name="name"
                            placeholder="Who are you?"
                        />
                        <TextBox
                            type="email"
                            name="email"
                            placeholder="What's your email address?"
                        />
                        <TextBox
                            type="text"
                            name="subject"
                            placeholder="What's the subject?"
                        />
                        <TextArea
                            rows="5"
                            name="message"
                            placeholder="What's the message?"
                        />
                        <SubmitButton type="submit">
                            Get in touch with Nicky
                        </SubmitButton>
                    </ContactContent>
                </SectionContent>
            </ContactContainer>
        </section>
    )
}

export default Contact
