import React, { Component } from 'react';
import styled from "styled-components";
import '../style/home_style.css';

const HomeMax = styled.div`
      position: absolute;
      width:60vw;
      height: 100vh;
      left:38vw;
      bottom:0;
      background: rgba(0, 0, 0, 0.8);
`;

const Hometitle = styled.div`
      position: absolute;
      font-family: Righteous;
      font-style: normal;
      top:38vh;
      left:45vw;
      font-weight: normal;
      font-size: 11vh;
      line-height: 11vh;
      color:white;
`;

const Homedes = styled.div`
      position: absolute;
      top:52vh;
      left:45vw;
      font-family: NATS;
      font-style: normal;
      font-weight: normal;
      font-size: 8vh;
      line-height: 8vh;
      color:white;
`;

class Home extends Component{
    render(){
      console.log('Home render');
      return(
        <div className="Homeimg">
           <HomeMax></HomeMax>
           <Hometitle>MJ_Portfolio</Hometitle>
           <hr className="home_line"/>
           <Homedes>welcome to my portfolio!</Homedes>
        </div>
      );
    }
  }

  export default Home;