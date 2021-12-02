import React, { Component } from 'react';
import styled from "styled-components";
import '../App.css';

const ProjectBg = styled.div`
      position: absolute;
      width:100vw;
      height: 300vh;
      bottom:0;
      top:60px;
      overflow: scroll;
      overflow-x:hidden; 
      overflow-y:auto; 
      &::-webkit-scrollbar{
        width: 6px;
      }
      &::-webkit-scrollbar-thumb{
        height: 17%;
        background-color: rgba(33,133,133,1);
        border-radius: 10px;  
      }
      &::-webkit-scrollbar-track{
        background-color: rgba(33,133,133,0.33);
      }
`;

class Project extends Component{
    render(){
      console.log('Project render');
      return(
        <ProjectBg>
           <div className="bottom">
           <nav><a href="https://github.com/LATIsi" target="_blank" rel="noopener noreferrer">Github</a></nav>
           </div>
        </ProjectBg>
      );
    }
  }

  export default Project;