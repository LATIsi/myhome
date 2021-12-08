import React, { Component } from 'react';
import styled from "styled-components";
import '../style/project_style.css';
import ProjectList from './List/ProjectList';

const ProjectScroll = styled.div`
    position: absolute;
    left:0;
    width: 100%;
    height: 150%;
    overflow: scroll;
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
width: 100%;
height: 30px;
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
width: 100%;
height: 2px;
margin:50px 0;
background:#E1E1E1;
border: none;
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
left: 50%;
transform: translateX(-50%);
`;

const ProjectBg2 = styled.div`
position: absolute;
width: 100%;
bottom:-120%;
height:300px;
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
        <ProjectHr1></ProjectHr1>
          </div>
        <TeamProject>
        <div className="ProjectHeaderText">Team project</div>
        <ProjectTopTextDesc>대학교 수업을 들으며 진행 했던 프로젝트들 입니다.</ProjectTopTextDesc>
          <ProjectList select="team"/>
        <div className="ProjectLinkText">team pj PPT file download - github</div>
        </TeamProject>
        <ProjectHr2></ProjectHr2>
        <PersonalProject>
        <div className="ProjectHeaderText">personal project</div>
          <ProjectList select="personal"/>
        <div className="ProjectLinkText">personal pj PPT file download - github</div>
        </PersonalProject>
        </ProjectBg>
        <ProjectBg2/>
        </ProjectScroll>
        </>
      );
    }
  }

  export default Project;