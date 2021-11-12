import React, { Component } from 'react';
import styled from "styled-components";
import '../style/home_style.css';

const HomeMax = styled.div`
      position: absolute;
      width:60vw;
      height: 100vh;
      left:38vw;
      bottom:0;
      top:60px;
      background: rgba(0, 0, 0, 0.8);
`;

const Hometitle = styled.div`
      position: absolute;
      font-family: Righteous;
      font-style: normal;
      top:37vh;
      left:45vw;
      font-weight: normal;
      font-size: 64px;
      line-height: 79px;
      color:white;
`;

const Homedes = styled.div`
      position: absolute;
      top:47vh;
      left:45vw;
      font-family: NATS;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 101px;
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