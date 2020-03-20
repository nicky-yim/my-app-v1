import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 33.33%;
`

const CardImg = styled(Img)`
    display: block;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.boxShadow} 0 1px 5px 2px;

    :before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${({ theme }) => theme.cardHover};
        z-index: 2;
        transition: 0.3s;
        opacity: 0;
    }
`

const CardInfo = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    padding: 15px;
    border-radius: 0 0 5px 5px;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    z-index: 2;
    background: ${({ theme }) => theme.cardInfo};
`

const CardDesc = styled.div`
    width: 100%;
    position: absolute;
    padding: 15px;
    top: 50%;
    left: 0px;
    transform: translate(0, -50%);
    color: ${({ theme }) => theme.primaryColor};
    font-weight: bold;
    opacity: 0;
    z-index: 3;
    transition: opacity 0.3s;
`

const CardItem = styled.a`
    margin: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    float: left;
    transition: all .3s;

    :hover {
        transform: translateY(5px);

        ${CardImg} {
            box-shadow ${({ theme }) => theme.boxShadow} 0 3px 10px 4px;

            :before {
                opacity: 1;
            }
        }

        ${CardDesc} {
            opacity: 1;
        }
    }
`

const Card = props => {
    return (
        <CardWrapper>
            <CardItem
                href={props.url}
                alt={props.name}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CardImg fixed={props.imageFile.childImageSharp.fixed} />
                <CardInfo>{props.name}</CardInfo>
                <CardDesc>{props.description}</CardDesc>
            </CardItem>
        </CardWrapper>
    )
}

export default Card
