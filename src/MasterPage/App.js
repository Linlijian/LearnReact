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
      { id: 'asw', name: 'Meiio', age: 19 },
      { id: 'wqd', name: 'Pori', age: 9 },
      { id: 'dfr', name: 'Kiro', age: 10 }
    ],
    isShowDiv: false
  }

  onClickShowDiv = () => {
    const show = this.state.isShowDiv
    this.setState({ isShowDiv: !show })
  }

  onChickDelete = (personIndex) => {
    const person = this.state.person
    person.splice(personIndex, 1)
    this.setState({ person: person })
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
          {this.state.person.map((person, index) => {
            return <Person 
            name={person.name} 
            click={() => this.onChickDelete(index)}
            key={person.id}>{person.age}</Person>
          })}
        </div>
      )
    }

    return (
      <div>
        <p>Hello world</p>
        <button onClick={this.onClickShowDiv}>Show Div</button>
        {person}

      </div>
    );
  }
}



export default App;
