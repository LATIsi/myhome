import React, { Component } from 'react';
import styled from "styled-components";
import '../style/Intro_style.css';

const IntroRecord = styled.div`
      width:65vw;
      height: 100vh;
      position: absolute;
      background:#0468BF;
`;

const Introself = styled.div`
      width:35vw;
      height: 100vh;
      position: absolute;
      right:0;
      box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.4);
      background:#F2F2F2;
`;

class Intro extends Component{
    render(){
      console.log('Intro render');
      return(
        <div className="IntroBg">
          <IntroRecord></IntroRecord>
           <Introself></Introself>
          wellcome to intro!
        </div>
      );
    }
  }

  export default Intro;