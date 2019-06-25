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
    ],
    isShowDiv: false
  }

  onClickChnageState = () => {
    this.setState({ name: 'Ong' })
  }

  onChnageState = (event) => {
    this.setState({ name: event.target.value })
  }

  fnChange = (data) => {
    this.setState({ name: data })
  }

  awrChange = (awr) => {
    this.setState({ name: awr })
  }

  onClickShowDiv = () => {
    const show = this.state.isShowDiv
    this.setState({ isShowDiv: !show })
  }

  render() {
    // this are css in line
    const colorBtn = {
      color: 'green',
      backgroundColor: 'yellow'
    }

    let person = null

    if (this.state.isShowDiv) {
      person = (
        <div>
          <Person name={'A'} />
          <Person >props children</Person >

          <Person name={this.state.name} >{this.state.age}</Person >
          <Person name={this.state.person[0].name} >{this.state.person[0].age}</Person >
        </div>
      )
    }

    return (
      <div>
        <p>Hello world</p>
        <button onClick={this.onClickShowDiv}>Show Div</button>
        {person}
        <p onClick={this.onClickChnageState}>Click Change State</p>

        <input type="text" onChange={this.onChnageState}></input>
        <br />
        <p>After click btn = {this.state.name}</p>
        <button style={colorBtn} onClick={this.fnChange.bind(this, this.state.person[0].age)}>bind change</button>
        <button onClick={() => this.awrChange(this.state.person[1].age)}>bind change</button>
      </div>
    );
  }
}



export default App;
