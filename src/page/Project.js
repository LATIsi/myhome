import React, { Component } from 'react';
import styled from "styled-components";
import '../style/project_style.css';
import ProjectList from './List/ProjectList';

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
width: 161px;
height: 60px;
right: 0;
top: 50px;
font-family: Righteous;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 60px;
/* identical to box height */
color: #000000;
`;

const ProjectTopTextDesc = styled.text`
position: relative;
width: 100%;
height: 30px;
left:5%;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: normal;
font-size: 16px;
text-align: left;
color: #000000;
`;

const ProjectHr1 = styled.hr`
position: absolute;
width: 50vw;
height: 3px;
right:-10px;
top: 110px;
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
padding-bottom:30px;
left: 50%;
transform: translateX(-50%);
`;

const ProjectBg2 = styled.div`
position: absolute;
width: 140vw;
height:200px;
left:-50%;
bottom:0;
background: linear-gradient(0deg, rgba(73, 73, 73, 0.08) 17.28%,
rgba(181, 181, 181, 0.06) 54.77%, rgba(255, 255, 255, 0) 83.18%);
`;



class Project extends Component{
    render(){

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
        </PersonalProject>
        </ProjectBg>
        </ProjectScroll>
        </>
      );
    }
  }

  export default Project;