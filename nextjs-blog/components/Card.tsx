import React from 'react'
import { styled } from 'styled-components'

const Card = styled.div`
    padding: 2em;
    margin: 60px 10px;
    background: #efefef;
    border: none;
    border-radius: 0.5rem;
    color: #888888;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    text-align: left;
    text-shadow: 1px 1px #eee;
    outline: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
        6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
`

export default Card
