import React from 'react';
import Skill from './page/Skill';
import Project from './page/Project';
import Home from './page/Home';
import Intro from './page/Intro';
import './style/nav_style.css';
import {Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

const Content = styled.div`
overflow-y:auto;
overflow-x:hidden;
height: 100%;
width: 100%;
`;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar">
      <div className="nav_Text">MINJI's PROPOPOL</div>
      <div className="nav_menu">
          {/* <HiMenu/> */}
          <ul>
            <li><Link to="/myhome/project">PROJECT</Link></li>
            <li><Link to="/myhome/skill">SKILL</Link></li>           
            <li><Link to="/myhome/intro">INTRO</Link></li>
            <li><Link to="/myhome/home">HOME</Link></li>
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
