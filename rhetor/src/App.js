import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import BlogPost from './SampleBlogPost'
import SampleBlogPost from './SampleBlogPost';



const Header = styled.header`
  margin-top: 20px;
  font-size: 35px;
  position: absolute;
  margin-left: 20px;
`

const Heading = styled.div`
  background-color: #8080807d; 
  width: 100%;
  height: 75px;
  position: fixed;
`

const Body = styled.div`
  width: 100%;
  height: -webkit-fill-available; 
  margin-top: 75px;
  background-color: #80808017; 
`

const Page = styled.div`
  display: flex; 
`

const Post = styled.div`
  width: 50vw;
  height: 100px; 
  margin-top: 30px;
  background-color: #ffffffff; 
  margin-left: auto;
  margin-right: auto; 
  border: 3px solid #80004c1f;
  padding: 10px;
`

class App extends Component {
  render() {
    return (
      <Page>
        <Heading>
          <Header className="App">
            Rhetor
          </Header>
        </Heading>
        <Body>
          <Post>
            <SampleBlogPost/>
          </Post>
        </Body>
      </Page>
    );
  }
}

export default App;
