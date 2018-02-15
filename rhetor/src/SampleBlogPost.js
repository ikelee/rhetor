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

var paragraph = "One may criticize the Falcon Heavy rocket for having a short launch manifest, as it has only two confirmed flights in the next year or so. There just aren't that many commercial customers right now for the heavier-lift rocket when a cheaper Falcon 9 or another medium-lift class of booster will suffice. But when one considers the more extreme cases—such as big Department of Defense missions to geostationary orbit or potential human exploration plans—the Falcon Heavy shines. Now that SpaceX's new rocket is finally flying, we can directly compare costs between this new booster and an existing rocket in its class, the Delta IV Heavy, as well as NASA's upcoming heavy lift booster, the Space Launch System. And upon direct comparison, the cost disparities are sobering, proving that commercial development of large rockets likely represents the future of the industry."

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