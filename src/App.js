import React , { useState } from "react";
import styled, {css} from "styled-components";
import Skill from './page/Skill';
import Project from './page/Project';
import Home from './page/Home';
import Intro from './page/Intro';
import './style/nav_style.css';
import {Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";


const Content = styled.div`
overflow-y:auto;
overflow-x:hidden;
height: 100%;
width: 100%;
`;


const NevLi = styled.li`
    color:black;
    ${props => props.nev_color &&
      css`
           color: #035aa6;
      `}
    }

`;


const Open = styled.div`
    position: absolute;
    top:2vh;
    right:6vw;
    z-index: 2;
    height: auto;
    width: auto;
    color:white;
    font-size: 5vh;
    visibility: hidden;
    @media screen and (max-width: 712px) {
      visibility: visible;
    }
`;

const Close = styled.div`
    position: absolute;
    top:-4.5vh;
    right:4vw;
    z-index: 3;
    height: auto;
    width: auto;
    font-size: 5vh;
    visibility: hidden;
    @media screen and (max-width: 712px) {
      visibility: visible;
    }
`;

function App() {

  const [nev_color1, setColor1] = useState(false);
  const [nev_color2, setColor2] = useState(false);
  const [nev_color3, setColor3] = useState(false);
  const [nev_color4, setColor4] = useState(true);
      
      const checkHome = () => {
        setColor1(false);
        setColor2(false);
        setColor3(false);
        setColor4(true);  
      }
    
      const checkIntro = () => {
        setColor1(false);
        setColor2(false);
        setColor3(true);
        setColor4(false);  
      }

      const checkSkill = () => {
        setColor1(false);
        setColor2(true);
        setColor3(false);
        setColor4(false);  
      }

      const checkProject = () => {
        setColor1(true);
        setColor2(false);
        setColor3(false);
        setColor4(false);  
      }

  return (
    <div className="App">
      <BrowserRouter>
          <Open>
          <HiMenu/>
          </Open>
      <nav className="navbar">
      <div className="nav_Text">MJ_PORTFOLIO</div>
      <div className="nav_menu">
          <Close>
          <MdClose/>
          </Close>
          <ul>
            <li  onClick={checkHome}><Link to="/myhome/home"><NevLi nev_color={nev_color4}>HOME</NevLi></Link></li>         
            <li  onClick={checkIntro}><Link to="/myhome/intro"><NevLi nev_color={nev_color3}>INTRO</NevLi></Link></li>
            <li  onClick={checkSkill}><Link to="/myhome/skill"><NevLi nev_color={nev_color2}>SKILL</NevLi></Link></li> 
            <li onClick={checkProject}><Link to="/myhome/project"><NevLi nev_color={nev_color1}>PROJECT</NevLi></Link></li>
          </ul>
        </div>
      </nav>
      <Content>
      <Switch>
      <Route path="/myhome/home" exact><Home>home</Home></Route>
      <Route path="/myhome/intro"><Intro>intro</Intro></Route>
      <Route path="/myhome/skill"><Skill>skill</Skill></Route>
      <Route path="/myhome/project"><Project>project</Project></Route>
      <Route path="/myhome/" ><Home>home</Home></Route>
      </Switch>
      </Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
