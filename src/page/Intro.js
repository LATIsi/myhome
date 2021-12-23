import React, { useState } from 'react';
import styled , {css} from "styled-components";
import "../style/Intro_style.css";
import "../App.css";
import IntroList from "./List/IntroList";
import { AiFillGithub } from "react-icons/ai";

const IntroRecord = styled.div`
  width: 65vw;
  height: 100vh;
  position: absolute;
  background: #0468bf;
`;

const Introself = styled.div`
  width: 35vw;
  height: 100vh;
  position: absolute;
  right: 0;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.4);
  background: #f2f2f2;
`;

const IntroselfTop = styled.div`
  width: 17vw;
  height: 22vh;
  position: absolute;
  right: 17vw;
  top: 15%;
`;

const IntroselfDown = styled.div`
  width: 28vw;
  height: 30vh;
  position: absolute;
  right: 10%;
  top: 48%;
`;

const Name = styled.text`
  position: absolute;
  width: 233px;
  height: 54px;
  right: 0;
  top: 0;

  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 60px;
  text-align: right;
  color: #000000;
`;

const Birthday = styled.text`
  position: absolute;
  width: 233px;
  height: 63px;
  right: 0;
  top: 7vh;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 63px;
  text-align: right;
  color: #000000;
`;

const IntroHr1 = styled.hr`
  position: absolute;
  width: 28vw;
  height: 1.5px;
  right: 10%;
  top: 43%;
  background: #011526;
  border: none;
`;

const IntroselfText = styled.text`
  position: absolute;
  width: 28vw;
  height: 48px;
  right: 0;
  top: 0;
  white-space: pre-wrap;
  font-family: Noto Sans KR, sans-serif;
  font-style: 300;
  font-weight: bord;
  font-size: 16px;
  line-height: 18px;
  /* or 133% */
  text-align: right;
  color: #223440;
`;

const EduCertiDiv = styled.div`
  position: absolute;
  width: 51vw;
  height: 65vh;
  left:50%;
  transform: translateX(-50%);
  top: 16vh;
  background: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SelectButton = styled.button`
    position: absolute;
    top: 8vh;
    width: 10vw;
    height: 80px;
    left:18.5%;
    transform: translateX(-50%);
    border: none;
    padding-top: 2vh;
    padding-bottom: 10vh;
    font-family: "Noto Sans KR";
    border-radius: 1.3vw;

    & + Button {
      margin-left:10vw;
    }

    &:hover {
      background-color:  #223440;
      color: #f2f2f2;
    }
    
    ${props => props.oncolor &&
      css`
           background-color: #E4E4E4;
           color:#929292;
      `}
    }

`;

const IntroSelfDownText =
  "디자인/그림이 취미인 \n 개발에 관심이 많은 신입 개발자입니다!!";

const Icons = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  right: 0;
  bottom: 0;
  text-align: right;
  display: inline;
`;

const View1 = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  right: 0;
  bottom: 0;
  text-align: right;
  display: inline;
`;


function Intro() {
  const [select, setSelection] = useState("Edu");
  const [oncolor1, setOnColor1] = useState(false);
  const [oncolor2, setOnColor2] = useState(true);

  const onToggle1 = () => {
    setSelection("Edu");
    setOnColor1(false);
    setOnColor2(true);
  }

  const onToggle2 = () => {
    setSelection("Certi");
    setOnColor1(true);
    setOnColor2(false);
  }

    return (
      <div className="IntroBg">
        <IntroRecord>
          <SelectButton selection="Edu"  oncolor={oncolor1} change1 onClick={onToggle1}>학력</SelectButton>
          <SelectButton selection="Certi" oncolor={oncolor2} change2  onClick={onToggle2}>자격증</SelectButton>
          <EduCertiDiv>
            <View1 selection ={select}>
            <IntroList select={select}/>
            </View1>
          </EduCertiDiv>
        </IntroRecord>
        <Introself>
          <IntroselfTop>
            <Name>Kim minji</Name>
            <Birthday>1999.11.01</Birthday>
            <Icons>
              <a
                href="https://github.com/LATIsi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="30" />
              </a>
              {/* <a
                href="https://github.com/LATIsi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="30" />
              </a>
              <a
                href="https://github.com/LATIsi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="30" />
              </a> */}
            </Icons>
          </IntroselfTop>
          <div className="intro_Picture"></div>
          <IntroHr1 />
          <IntroselfDown>
            <IntroselfText>{IntroSelfDownText}</IntroselfText>
          </IntroselfDown>
        </Introself>
      </div>
    );
}

export default Intro;
