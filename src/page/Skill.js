import React, { Component } from 'react';
import styled from "styled-components";

const Skillbg = styled.div`
      position: absolute;
      width:100vw;
      height: 100vh;
      bottom:0;
      top:60px;
      background: #4BA4F2;
`;

const SkillTitle = styled.text`
      position: absolute;
      width: 50vw;
      height: 10vh;
      right: 8vw;
      top:5vh;
      font-family: Righteous;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 80px;
      color: #FFFFFF;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

const SkillLine = styled.text`
    position: absolute;
    width: 50vw;
    height: 2px;
    right:15.5vw;
    top:17.5vh;
    background: #FFFFFF;
    border: none;

`;

const SkillMain = styled.div`
      position: absolute;
      width: 70vw;
      height: 60vh;
      left: 15vw;
      top: 20vh;

      background: #FFFFFF;
      box-sizing: border-box;
      box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
`;

const SkillMainTitle = styled.text`
    position: absolute;
    width: 70vw;
    height: 53px;
    left: 0;
    top: 0;

    background: #FFFFFF;
    box-sizing: border-box;
    box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

class Skill extends Component{
    render(){
      console.log('Skill render');
      return(
          <Skillbg>
            <SkillTitle>TOOL / Language SKILL</SkillTitle>
            <SkillLine/>
            <SkillMain>
              <SkillMainTitle/>
            </SkillMain>
          </Skillbg>
      );
    }
  }

  export default Skill;