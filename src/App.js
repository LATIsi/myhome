import React from 'react';
import Skill from './page/Skill';
import Project from './page/Project';
import './App.css';
import {Route, Switch} from 'react-router-dom';

// json package.json script 에
    //"start": "react-scripts start",
    //"build": "react-scripts build",
    //이 기본.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> hello React Router</h1>
        <div className="header-list">
          <ul>
          <a href="/"><li>home</li></a>
          <a href="/skill"><li>skill</li></a>
          <a href="/project"><li>project</li></a>
          </ul>
        </div>
      </header>
      <Switch>
      <Route path="/" exact>
        this is a home







      </Route>
      <Route path="/skill"><Skill>skill</Skill></Route>
      <Route path="/project"><Project>project</Project></Route>
      <Route path="/">NOT Found</Route>
      </Switch>
      <hr/>
      <nav>down testnav</nav>
    </div>
  );
}

export default App;
