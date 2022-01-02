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
        @media screen and (max-width: 712px) {
          top:30vh;
          width: 100vw;
          height: 70vh;
        }
`;

const Introself = styled.div`
  width: 35vw;
  height: 100vh;
  position: absolute;
  right: 0;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.4);
  background: #f2f2f2;

      @media screen and (max-width: 712px) {
        top:0;
        width: 100vw;
        height: 30vh;
      }

`;

const IntroselfTop = styled.div`
  width: 17vw;
  height: 18vh;
  position: absolute;
  right: 16vw;
  top: 15vh;

      @media screen and (max-width: 712px) {
        top:2vh;
        width: 100vw;
        height: 25vh;
        right: 0;
      }

      @media screen and (max-width: 712px) {
        top:2vh;
        width: 100vw;
        height: 25vh;
        right: 0;
      }
`;

const IntroselfDown = styled.div`
  width: 28vw;
  height: 30vh;
  position: absolute;
  right: 10%;
  top: 48%;

      @media screen and (max-width: 712px) {
        top: 18vh;
        right:45vw;
        height: 10vh;
        width: 60vw;
      }

`;

const Name = styled.text`
  position: absolute;
  width: 20vw;
  height: auto;
  right: 0;
  bottom:8vh;
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  font-size: 3.5vw;
  line-height: 3.5vw;
  text-align: right;
  color: #000000;

    @media screen and (max-width: 712px) {
      width: 40vw;
      font-size: 7vw;
      line-height: 7vw;
      bottom:14vh;
      right:45vw;
    }
`;

const Birthday = styled.text`
  position: absolute;
  width: auto;
  height: auto;
  right: 0;
  bottom:3.5vh;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 3vh;
  line-height: 3vh;
  text-align: right;
  color: #000000;

      @media screen and (max-width: 712px) {
        bottom:10vh;
        right:45vw;
      }
`;

const IntroHr1 = styled.hr`
  position: absolute;
  width: 28vw;
  height: 0.3vh;
  right: 10%;
  top: 43vh;
  background: #C8C8C8;
  border: none;

      @media screen and (max-width: 712px) {
        display:none;
      }
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
  font-size: 2.5vh;
  line-height: 3vh;
  /* or 133% */
  text-align: right;
  color: #223440;

      @media screen and (max-width: 712px) {
        width: 60vw;
        height: auto;
        bottom:0;
      }
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
        @media screen and (max-width: 860px) {
          width: 56vw;
        }

        @media screen and (max-width: 712px) {
          width: 95vw;
          top: 15vh;
          height: 55vh;
        }
`;

const SelectButton = styled.button`
    position: absolute;
    top: 8vh;
    width: 10vw;
    height: 15vh;
    left:18.5%;
    font-size: 2.5vh;
    transform: translateX(-50%);
    border: none;
    padding-bottom: 8vh;
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

      @media screen and (max-width: 860px) {
        left:14.5%;
      }

      @media screen and (max-width: 712px) {
        top: 6vh;
        width: 47.5vw;
        left:26.3vw;
        border-radius: 4vh;
        font-size: 3vh;
        padding-bottom: 7vh;
            & + Button {
              margin-left:47.5vw;
            }

      }
`;

const IntroSelfDownText =
  "디자인/그림이 취미인 \n 개발에 관심이 많은 신입 개발자입니다!!";

const Icons = styled.div`
  position: absolute;
  width: 2vw;
  height: 1vh;
  right: 0;
  bottom: 1vh ;
  text-align: right;
  display: inline;

      @media screen and (max-width: 1020px) {
        right: 0.8vw;
      }

      @media screen and (max-width: 800px) {
        right: 1.3vw;
      }

      @media screen and (max-width: 712px) {
        right:5vw;
        bottom:1vh;
        height:3vh;
        width: 2vw;
      }
`;

const View1 = styled.div`
  position: absolute;
  width: 100%;
  top:0;
  height: auto;
  right: 0;
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
                <AiFillGithub size="30" color='black' />
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
          <div className="intro_Picture_in">
          <div className="intro_Picture"/>
          </div>
          <IntroHr1 />
          <IntroselfDown>
            <IntroselfText>{IntroSelfDownText}</IntroselfText>
          </IntroselfDown>
        </Introself>
      </div>
    );
}

export default Intro;
