import React, { Component } from 'react';
import logo from '../logo.svg';
import '../MasterCss/App.css';
import '../Person/Person';
import Person from '../Person/Person';

class App extends Component {

  render() {

    return (
      <div>
        <p>Hello world</p>
        <Person name = {'A'}/>
        <Person >props children</Person >
      </div>
    );
  }
}



export default App;
