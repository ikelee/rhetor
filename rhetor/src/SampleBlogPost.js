import React, { Component } from 'react';
import styled from 'styled-components'

import elon from './elon.jpg'
import spacex from './spacex.jpeg'
import elonGif from './giphy.gif'


const Author = styled.div`
    font-size: 20px;
    margin: 5px;
`

const Title = styled.div`
    margin-top: 5px;
    font-size: 40px;
`

const Paragraph = styled.div`
    margin-top: 5px;
    font-size: 20px;
    position: absolute;
    width: 45%;
    right: 15px;
    top: 100px;
`

const Icon = styled.img`
    height: 60px;
    width: 60px;
    position: absolute;
    right: 20px;
    top: 20px;
`

const Image = styled.img`
    width: 50%;
    height: auto;
    margin-top: 10px;
`

const Gif = styled.img`
    width: 20%;
    height: auto;
    left: 10px;
    position: absolute;
    top: 320px;
`

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis est eget pretium consequat. Donec tempus quis enim et ultrices. Donec eu porta quam. Sed felis diam, dignissim a lorem non, vulputate efficitur nisl. Praesent metus metus, aliquam ac rutrum et, porta vel leo. Fusce sed magna diam. Ut congue et nulla sit amet interdum. Donec in pharetra diam. Quisque dui augue, posuere sit amet dui at, volutpat pretium turpis. Duis in nibh id libero rutrum mattis. Duis odio erat, tempor vel pharetra sed, sodales malesuada augue. Mauris imperdiet dui efficitur turpis sagittis mattis. Aenean ornare varius justo, id dictum mi ornare non. Praesent iaculis dui ac magna condimentum congue. Donec sollicitudin mauris eu justo finibus, in molestie tortor efficitur."

export default () => (
    <div>
        <Author> Elon Musk </Author>
        <Title> Falcon Heavy launch a success </Title>
        <Icon src={elon}/>
        <Image src={spacex}/>
        <Gif src={elonGif}/>
        <Paragraph> {paragraph} </Paragraph>
    </div>
)