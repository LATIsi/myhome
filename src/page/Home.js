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
      @media screen and (max-width: 750px) {
            width:100vw;
            left:0;
            height: 45vh;
            bottom:0;
            border-radius: 30vw 0px 0px 0px;
          }
`;

const Hometitle = styled.div`
      position: absolute;
      font-family: Righteous;
      font-style: normal;
      bottom:51vh;
      left:45vw;
      font-weight: normal;
      font-size: 11vh;
      line-height: 11vh;
      color:white;
      @media screen and (max-width: 750px) {
        bottom:24vh;
        white-space: pre-wrap;
        text-align: right;
        width:80vw;
        left: 50%;
        font-size: 8vh;
        line-height: 8vh;
        transform: translateX(-50%);
    }
`;

const Homedes = styled.div`
      position: absolute;
      bottom:40vh;
      left:45vw;
      font-family: NATS;
      font-style: normal;
      font-weight: normal;
      font-size: 7vh;
      line-height: 7vh;
      color:white;
      @media screen and (max-width: 750px) {
        bottom:16vh;
        font-size: 3.5vh;
        line-height: 3.5vh;
        width:100vw;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }
`;

const Htitle = "MJ\n_Portfolio";

class Home extends Component{


    render(){
      console.log('Home render');
      return(
        <div className="Homeimg">
           <HomeMax></HomeMax>
           <Hometitle>{Htitle}</Hometitle>
           <hr className="home_line"/>
           <Homedes>welcome to my portfolio!</Homedes>
        </div>
      );
    }
  }

  export default Home;