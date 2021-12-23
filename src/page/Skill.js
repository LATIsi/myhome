import React , { useState } from "react";
import  styled, {css} from "styled-components";
import SkillList from './List/SkillList';
import "../style/Skill_style.css";

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
      Bottom:77vh;
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
    Bottom:74vh;
    background: #FFFFFF;
    border: none;
`;

const SkillMain = styled.div`
      position: absolute;
      width: 70vw;
      height: 62vh;
      left: 50%;
      transform: translateX(-50%);
      bottom:10vh;
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

const SkillButton = styled.button`
    width: 11px;
    height: 12px;
    border: none;
    border-radius: 8px;
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

      return(
          <Skillbg>
            <SkillTitle>TOOL / Language SKILL</SkillTitle>
            <SkillLine/>
            <SkillMain>
              <SkillMainTitle color={color}> {TitleText} </SkillMainTitle>
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