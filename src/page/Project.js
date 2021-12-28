import React, { useState } from 'react';
import styled , {css} from "styled-components";
import '../style/project_style.css';
import ProjectList from './List/ProjectList';
import { MdClose } from "react-icons/md";

const ProjectScroll = styled.div`
    position: absolute;
    left:0;
    width: 100%;
    height:100%;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.8vw;
    }
    &::-webkit-scrollbar-thumb {
      height: 15%;
      background-color: #a4b3be;
      border-radius: 5px;  
    }
`;

const ProjectBg = styled.div`
position: absolute;
width: 80%;
height:100%;
left: 50%;
transform: translateX(-50%);
`;


const ProjectTopText = styled.text`
position: absolute;
width: auto;
height: auto;
right: 0;
top:12vh;
font-family: Righteous;
font-style: normal;
font-weight: normal;
font-size: 8vh;
line-height: 8vh;
/* identical to box height */
color: #000000;
`;

const ProjectTopTextDesc = styled.text`
position: relative;
width: 100%;
height: auto;
left:5%;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: normal;
font-size: 2.5vh;
text-align: left;
color: #000000;
`;

const ProjectHr1 = styled.hr`
position: absolute;
width: 50vw;
height: 3px;
right:-10px;
top:21vh;
background:#E1E1E1;
border: none;
`;

const ProjectHr2 = styled.hr`
position: relative;
width: 90%;
height: 2px;
background:#E1E1E1;
border: none;
left: 47%;
transform: translateX(-50%);
`;

const TeamProject = styled.div`
position: relative;
width: 85%;
height:auto;
left: 50%;
transform: translateX(-50%);
`;

const PersonalProject = styled.div`
position: relative;
width: 85%;
height:auto;
padding-top:50px;
padding-bottom:20vh;
left: 50%;
transform: translateX(-50%);
`;

const ProjectBg2 = styled.div`
position: absolute;
width: 140vw;
height:30vh;
left:-50%;
bottom:0;
background: linear-gradient(0deg, rgba(73, 73, 73, 0.08) 17.28%,
rgba(181, 181, 181, 0.06) 54.77%, rgba(255, 255, 255, 0) 83.18%);
`;

const Footer = styled.div`
position: absolute;
width: 115vw;
height:8vh;
left:-50%;
bottom:0;
text-align:right;
margin-right:40vw;
white-space: pre-wrap;
`;

const FooterBg = styled.div`
position:fixed ;
width: 35vw;
height:30vh;
bottom:12vh;
text-align:right;
right:-13vw;
z-index:5;
background:#e9ecef;
${props => props.open && css`
visibility: visible;
`}
`;

const Close = styled.div`
position:absolute ;
width: 3vw;
height:20%;
top:2vh;
right:0;
font-size: 2vh;
margin-right:1.5vw;
`;

const FooterText = styled.div`
position:absolute ;
margin-right:2vw;
margin-left:2vw;
width: 95%;
height:65%;
bottom:2vh;
right:0;
text-align:right;
font-size: 1vw;
`;

const FooterDiv = styled.div`
position:absolute ;
right:0;
width: auto;
height:auto;
`;

function Project () {

  const [open, setOpen] = useState(false);
  const onToggle = () => {setOpen(!open); console.log(open)};


      const footerText="Copyright 2021. kmj. all rights reserverd. & 사진 출처";
      const footerdesc1="home 이미지 - Photo by Zan \n ";
      const footerdesc2="Intro 이미지 - Photo by Nick Adams \n ";
      const footerdesc3="Project 남성의류쇼핑몰 이미지 - Photo by Priscilla Du Preez \n ";
      return(
        <>
        <ProjectScroll>
        <ProjectBg>
          <div className="ProjectTopDiv">
        <ProjectTopText>Project</ProjectTopText>
        <ProjectHr1/>
          </div>
        <TeamProject>
          <div className="ProjectHeaderText">Team project</div>
          <ProjectTopTextDesc>대학교 수업을 들으며 진행 했던 프로젝트들 입니다.</ProjectTopTextDesc>
          <ProjectList select="team"/>
          <div className="ProjectLinkText" onClick={() => window.open('https://github.com/LATIsi/team_project', '_blank')}>
            team pj ReadME PPT file download - github
          </div>
        </TeamProject>
        <ProjectHr2/>
        <PersonalProject>
          <div className="ProjectHeaderText">personal project</div>
          <ProjectList select="personal"/>
          <div className="ProjectLinkText" onClick={() => window.open('https://github.com/LATIsi/personal_project', '_blank')}>
            personal pj PPT file download - github
          </div>
          <ProjectBg2/>
          <Footer>
              {open && (
                  <FooterBg>
                    <Close>
                    <MdClose onClick={onToggle} size="2vw"/>
                    </Close>
                    <FooterText>
                      <div onClick={() => window.open('https://unsplash.com/@zanilic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', '_blank')}>{footerdesc1}</div>
                      <div onClick={() => window.open('https://unsplash.com/@nckadms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', '_blank')}>{footerdesc2}</div>
                      <div onClick={() => window.open('https://unsplash.com/@priscilladupreez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', '_blank')}>{footerdesc3}</div>
                    </FooterText>
                   </FooterBg>
              )}
            <FooterDiv onClick={onToggle} open={open}>{footerText}</FooterDiv>
          </Footer>
        </PersonalProject>
        </ProjectBg>
        </ProjectScroll>
        </>
      );
  }

  export default Project;