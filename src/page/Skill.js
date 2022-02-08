import React , { useState } from "react";
import  styled, {css} from "styled-components";
import SkillList from './List/SkillList';
import "../style/Skill_style.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Skillbg = styled.div`
      position: absolute;
      width:100vw;
      height: 100vh;
      bottom:0;
      background: #4BA4F2;
`;

const SkillTitle = styled.text`
      position: absolute;
      width: auto;
      height: 10vh;
      right:15.5vw;
      Bottom:73vh;
      font-family: Righteous;
      font-style: normal;
      font-weight: normal;
      font-size: 8vh;
      line-height: 8vh;
      color: #FFFFFF;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            @media screen and (max-width: 750px) {
              white-space: pre-wrap;
              Bottom:80vh;
              font-size: 5vh;
              line-height: 5vh;
              width: 100vw;
              left: 8vw;
            }
`;

const SkillLine = styled.text`
    position: absolute;
    width: 45vw;
    height: 0.4vh;
    right:15.5vw;
    Bottom:73.5vh;
    background: #FFFFFF;
    border: none;
    @media screen and (max-width: 750px) {
      visibility: hidden;
    }
`;


const SkillMainTitle = styled.text`
    z-index: 3;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 70vw;
    height: 10vh;
    bottom: 62vh;
    text-align: center;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 5vh;
    line-height: 10vh;
    color: #7A64FF;
    background: #FFFFFF;
    box-sizing: border-box;
    box-shadow:  0.05vw 0.2vw 4px rgba(0, 0, 0, 0.25);
    border-radius: 1vw;
    color: ${props => props.color};
    @media screen and (max-width: 750px) {
      width: 85vw;
      font-size: 4vh;
      line-height: 8vh;
      height: 8vh;
      border-radius: 5vw;
      bottom: 62vh;
    }
`;

const SkillMain = styled.div`
      z-index: 2;
      position: absolute;
      width: 70vw;
      height: 55vh;
      left: 50%;
      transform: translateX(-50%);
      bottom:10vh;
      padding-top:7vh;
      background: white;
      box-sizing: border-box;
      box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.25);
      border-radius: 1vw;
      overflow-y: auto;
      overflow: scroll;
      overflow-x:hidden; 
      &::-webkit-scrollbar {
        width: 0.8vw;
      }
      &::-webkit-scrollbar-thumb {
        height: 15%;
        background-color: #a4b3be;
        border-radius: 5px;  
      }
      padding-top:7vh;
      @media screen and (max-width: 950px) {
        padding-top:5vh;
      }
      @media screen and (max-width: 750px) {
        width: 85vw;
        border-radius: 0 0 5vw 5vw ;
        height: 60vh;
        bottom:5vh;
      }
`;

const SkillButton = styled.button`
    width: 1vw;
    height: 1vw;
    border: none;
    border-radius: 1vw;
    background:white;
    ${props => props.incheck &&
      css`
           background-color: #C4C4C4;
      `}
    }
    & + & {
      margin-left: 3vw;
    }
    &:hover {
      ${props => props.incheck} {
            background-color: #C4C4C4;
          }
      background-color: #C4C4C4;
    }
    @media screen and (max-width: 750px) {
      bottom:69vh;
      border-radius: 3vw;
      height: 2vh;
      width: 2vw;
      & + & {
        margin-left: 6vw;
      }
    }
`;

const PreButton = styled.button`
   position: absolute;
   background: none;
   border:none;
   width: 15vw;
   height: 100vh;
   top:60%;
   transform: translateY(-50%);
   left:0vw;
   z-index: 3;
   text-align: center;

   .pre {
          color: rgba(0, 0, 0, 0.0);
        }
   
   @media screen and (max-width:950px) {
      width: auto;
      top:60%;
      transform: translateY(-50%);
    } 
    
    @media screen and (max-width: 750px) {
      left :-3vw;
      top:60%;
      transform: translateY(-50%);
    } 

    transition: 0.2s all ease-in;
    &:hover{
      left :0vw;
      width:20vw;
      background-color:rgba(0, 0, 0, 0.4);
      .pre {
          color: #fff;
        }
    }
`;

const NextButton = styled.button`
   position: absolute;
   background: none;
   border:none;
   width: 15vw;
   height: 100vh;
   top:60%;
   transform: translateY(-50%);
   right:0vw;
   z-index: 3;
   text-align: center;

   .next {
        color: rgba(0, 0, 0, 0.0);
        }

   @media screen and (max-width: 950px) {
      width: auto;
      top:60%;
      transform: translateY(-50%);
    } 

    @media screen and (max-width: 750px) {
      right : -3vw;
      top:60%;
      transform: translateY(-50%);

    } 

    transition: 0.2s all ease-in;
    &:hover{
       right :0vw;
       width:20vw;
       background-color:rgba(0, 0, 0, 0.4);  
       .next {
          color: #fff;
        }
    }
`;

//https://github.com/react-icons/react-icons 참고.

function Skill () {

      const [color, setColor] = useState("#7A64FF");
      const [TitleText, setTitleText] = useState("Dev language");
      const [SkillSelect, setSkillSelect] = useState("DevLanguage");
      const [incheck1, setInCheck1] = useState(true);
      const [incheck2, setInCheck2] = useState(false);
      const [incheck3, setInCheck3] = useState(false);
      const [incheck4, setInCheck4] = useState(false);
      
      const skCheck1 = () => {
            setColor("#7A64FF");
            setTitleText("Dev Language");
            setSkillSelect("DevLanguage");
            setInCheck1(true);
            setInCheck2(false);
            setInCheck3(false);
            setInCheck4(false);
      }
    
      const skCheck2 = () => {
            setColor("#1166FF");
            setTitleText("Design tool");
            setSkillSelect("DesignTool");
            setInCheck1(false);
            setInCheck2(true);
            setInCheck3(false);
            setInCheck4(false);
      }

      const skCheck3 = () => {
            setColor("#2EBBA2");
            setTitleText("Dev Tool");
            setSkillSelect("DevTool");
            setInCheck1(false);
            setInCheck2(false);
            setInCheck3(true);
            setInCheck4(false);
      }
        
      const skCheck4 = () => {
            setColor("#E99C2E");
            setTitleText("Dev Server");
            setSkillSelect("DevServer");
            setInCheck1(false);
            setInCheck2(false);
            setInCheck3(false);
            setInCheck4(true);
      }

      const SkillTitledesc = "TOOL / \nLanguage SKILL";
      return(
          <Skillbg>
            <SkillTitle>{SkillTitledesc}</SkillTitle>
            <SkillLine/>
            <SkillMainTitle color={color}> {TitleText} </SkillMainTitle>
	              <PreButton><BsChevronCompactLeft size="120" className="pre" /></PreButton>
                <NextButton><BsChevronCompactRight size="120" className="next"  /></NextButton>
            <SkillMain>
              <SkillList color={color} select={SkillSelect} />
            </SkillMain>
            <div className="SkillButton_div">
            <SkillButton className="SkillButton" onClick={skCheck1} incheck={incheck1}/>
            <SkillButton className="SkillButton" onClick={skCheck2} incheck={incheck2}/>
            <SkillButton className="SkillButton" onClick={skCheck3} incheck={incheck3}/>
            <SkillButton className="SkillButton" onClick={skCheck4} incheck={incheck4}/>
            </div>
          </Skillbg>
      );
    }


  export default Skill;