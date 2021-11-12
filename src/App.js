import React from 'react';
import Skill from './page/Skill';
import Project from './page/Project';
import Home from './page/Home';
import Intro from './page/Intro';
import './style/nav_style.css';
import {Route, Switch} from 'react-router-dom';
import styled from "styled-components";


const Content = styled.div`
padding-top: 60px;
overflow :hidden;
`;


function App() {
  return (
    <div className="App">
      <nav className="navbar">
      <div className="nav_text">MINJI's PROPOPOL</div>
      <div className="nav_menu">
          <ul>
            <li><a href="/project">PROJECT</a></li>
            <li><a href="/skill">SKILL</a></li>           
            <li><a href="/intro">INTRO</a></li>
            <li><a href="/home">HOME</a></li>
          </ul>
        </div>
      </nav>
      <Content>
      <Switch>
      <Route path="/home" exact><Home>home</Home></Route>
      <Route path="/intro"><Intro>intro</Intro></Route>
      <Route path="/skill"><Skill>skill</Skill></Route>
      <Route path="/project"><Project>project</Project></Route>
      <Route path="/"><Home>home</Home></Route>
      </Switch>
      </Content>
    </div>
  );
}

export default App;
