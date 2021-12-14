import React from 'react';
import styled from "styled-components";
import SkillList from './List/SkillList';


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
      width: auto;
      height: 10vh;
      right:15.5vw;
      top:20px;
      font-family: Righteous;
      font-style: normal;
      font-weight: normal;
      font-size: 46px;
      line-height: 80px;
      color: #FFFFFF;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

const SkillLine = styled.text`
    position: absolute;
    width: 45vw;
    height: 2px;
    right:15.5vw;
    top:95px;
    background: #FFFFFF;
    border: none;

`;

const SkillMain = styled.div`
      position: absolute;
      width: 70vw;
      height: 60vh;
      left: 50%;
      transform: translateX(-50%);
      top:110px;
      background: white;
      box-sizing: border-box;
      box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      overflow: hidden;
`;

const SkillMainTitle = styled.text`
    position: absolute;
    width: 70vw;
    height: 10vh;
    text-align: center;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 10vh;
    left: 0;
    color: #7A64FF;
    top: 0;
    background: #FFFFFF;
    box-sizing: border-box;
    box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: ${props => props.color};
`;
//https://github.com/react-icons/react-icons 참고.

function Skill () {
      const TitleText = "dev language";
      const color = '#7A64FF';
      const SkillSelect = "DevLanguage";
      console.log('Skill render');
      return(
          <Skillbg>
            <SkillTitle>TOOL / Language SKILL</SkillTitle>
            <SkillLine/>
            <SkillMain>
              <SkillMainTitle color={color}> {TitleText} </SkillMainTitle>
              <SkillList color={color} select={SkillSelect} />
            </SkillMain>
          </Skillbg>
      );
    }


  export default Skill;