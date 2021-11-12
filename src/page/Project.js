import React, { Component } from 'react';
import '../App.css';

class Project extends Component{
    render(){
      console.log('Project render');
      return(
        <div>
           <h1> hello Project! </h1>
           <div className="bottom">
           <nav><a href="https://github.com/LATIsi" target="_blank" rel="noopener noreferrer">Github</a></nav>
           </div>
        </div>
      );
    }
  }

  export default Project;