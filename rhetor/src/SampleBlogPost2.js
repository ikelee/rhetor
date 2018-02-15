import React, { Component } from 'react';
import styled from 'styled-components'

import elon from './tim.jpeg'
import spacex from './apple.jpg'

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
    margin-bottome: 5px
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

var paragraph = "Apple had a shockingly bad week of software problems just before the end of 2017, and it looks like 2018 isn’t starting so well either. A new bug has been discovered in iOS 11 that lets people send a specific character that will crash an iPhone and block access to the Messages app in iOS and popular apps like WhatsApp, Facebook Messenger, Outlook for iOS, and Gmail. Italian Blog Mobile World spotted the bug, and we’ve tested it successfully on multiple iPhones running iOS 11.2.5, and found it also works on the macOS versions of Safari and Messages. The bug itself involves sending an Indian language (Telugu) character to devices, and Apple’s iOS Springboard will crash once the message has been received. Messages will no longer open as the app is trying and failing to load the character, and it appears that the only way to regain access to your iMessages is to have another friend send you a message and try to delete the thread that contained the bad character. We’ve also tested the bug on third-party apps like Facebook Messenger, WhatsApp, Gmail, and Outlook for iOS and found that these apps can become disabled once a message is received. It might be difficult to fix and delete the problem message for apps like WhatsApp, unless you have web access enabled. Telegram and Skype appear to be unaffected. The public beta versions of iOS 11.3 is also unaffected, so Apple will clearly fix this once iOS 11.3 is available broadly sometime this spring."

export default () => (
    <div>
        <Author> Tim Cook </Author>
        <Title> iOS bug crashes iPhones </Title>
        <Icon src={elon}/>
        <Image src={spacex}/>
        <Paragraph> {paragraph} </Paragraph>
    </div>
)