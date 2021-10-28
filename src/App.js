import React from 'react';
import Skill from './page/Skill';
import Project from './page/Project';
import Home from './page/Home';
import './App.css';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> MINJI's PROPOPOL </h1>
        <div className="header-list">
          <ul>
          <a href="/"><li>home</li></a>
          <li>|</li>
          <a href="/skill"><li>skill</li></a>
          <li>|</li>
          <a href="/project"><li>project</li></a>
          </ul>
        </div>
      </header>
      <Switch>
      <Route path="/" exact><Home>home</Home></Route>
      <Route path="/skill"><Skill>skill</Skill></Route>
      <Route path="/project"><Project>project</Project></Route>
      <Route path="/">NOT Found</Route>
      </Switch>
      <div className="bottom">
        <hr/>
        <nav><a className="a_white" href="https://github.com/LATIsi" target="_blank" rel="noopener noreferrer">Github</a></nav>
      </div>
    </div>
  );
}

export default App;
