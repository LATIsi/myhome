import React from 'react';
import popol1 from './page/popol1';
import popol2 from './page/popol2';
import './App.css';
import {Route} from 'react-router-dom';

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
      <h1>test</h1>
      <nav>testnav</nav>
      <ul>
        <li></li>
      </ul>
      <Route path="/skill"><popol1>skill</popol1></Route>
      <Route path="/project"><popol2>project</popol2></Route>
    </div>
  );
}

export default App;
