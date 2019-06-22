import React, { Component } from 'react';
import logo from '../logo.svg';
import '../MasterCss/App.css';
import '../Person/Person';
import Person from '../Person/Person';

class App extends Component {
  // this state area
  state = {
    name: 'A',
    age: 23,
    person: [
      { name: 'Meiio', age: 19 },
      { name: 'Pori', age: 9 },
      { name: 'Kiro', age: 10 }
    ]
  }

  onClickChnageState = () => {
    this.setState({ name: 'Ong' })
  }
  
  render() {

    return (
      <div>
        <p>Hello world</p>
        <Person name={'A'} />
        <Person >props children</Person >

        <Person name={this.state.name} >{this.state.age}</Person >
        <Person name={this.state.person[0].name} >{this.state.person[0].age}</Person >
        <p onClick={this.onClickChnageState}>Click Change State</p>
      </div>
    );
  }
}



export default App;
