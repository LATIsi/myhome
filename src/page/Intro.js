import React, { useState } from 'react';
import styled , { css } from "styled-components";
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
  left: 10%;
  top: 15%;
  background: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SelectButton = styled.button`
    position: absolute;
    top: 8%;
    width: 12%;
    height: 80px;
    left:10%;
    border: none;
    padding-bottom: 35px;
    font-family: "Noto Sans KR";
    border-radius: 20px;

    & + Button {
      margin-left: 7.8vw;
    }

    ${({ on }) => {
      return on ?
      css ` color: #223440;
      background: #f2f2f2;
      ` 
      :
      css ` color: #929292;
      background: #E4E4E4;
      ` ;
    }}
  }  

  &:hover {
    background-color:  #223440;
    color: #f2f2f2;
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

function Intro() {

  const [change1, setOn1] = useState(true);
  const [change2, setOn2] = useState(false);
  const [select, setSelection] = useState("Edu");

  const onToggle = () => {
    
    setOn1(!change1);  setOn2(!change2);
    if(select==="Edu"){
      setSelection("Certi");
    }else{ setSelection("Edu");}
    console.log('change1 : '+change1);
    console.log('change2 : '+change2);
    console.log('select : '+select);
  }


    return (
      <div className="IntroBg">
        <IntroRecord>
          <SelectButton selection="Edu" change1 onClick={onToggle}>학력</SelectButton>
          <SelectButton selection="Certi" change2  onClick={onToggle}>자격증</SelectButton>
          <EduCertiDiv>
            <IntroList select/>
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
              <a
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
              </a>
            </Icons>
          </IntroselfTop>
          <div className="intro_Picture"></div>
          <IntroHr1 />
          <IntroselfDown>
            <IntroselfText>{IntroSelfDownText}</IntroselfText>
          </IntroselfDown>
        </Introself>
        wellcome to intro!
      </div>
    );
}

export default Intro;
