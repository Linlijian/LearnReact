import React, { Component } from 'react';
import logo from '../logo.svg';
import '../MasterCss/App.css';
import '../Person/Person';
import Person from '../Person/Person';
import Validate from '../Validate/Validate';
import CharCard from '../CharCard/CharCard';

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
    isShowDiv: false,
    isShowAssignment: false,
    inputValues: ''
  }

  onClickShowDiv = () => {
    const show = this.state.isShowDiv
    this.setState({ isShowDiv: !show })
  }

  onClickShowAssignment = () => {
    const show = this.state.isShowAssignment
    this.setState({ isShowAssignment: !show })
  }

  onChickDelete = (personIndex) => {
    const person = this.state.person
    person.splice(personIndex, 1)
    this.setState({ person: person })
  }

  onChickDeleteCard = (index) => {
    const card = this.state.inputValues.split('')
    card.splice(index, 1)
    const newCard = card.join('')
    this.setState({ inputValues: newCard })
  }

  inputChangeHendler = (event) => {
    this.setState({ inputValues: event.target.value })
  }

  onChangeName = (event, id) => {
    const perosIndex = this.state.person.findIndex(p => {
      //p is mean parameter name from person
      return p.id === id
    })

    //copy sperson aray by index id
    const perosnNew = {
      ...this.state.person[perosIndex]
    }

    //set value
    perosnNew.name = event.target.value

    //compy person type aray
    const person = [...this.state.person]

    //set values by index id
    person[perosIndex] = perosnNew


    //set state
    this.setState({ person: person })

  }

  render() {
    // this are css in line
    const colorBtn = {
      color: 'green',
      backgroundColor: 'yellow'
    }

    let person = null
    let Assignment = null

    if (this.state.isShowDiv) {
      person = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
              name={person.name}
              click={() => this.onChickDelete(index)}
              key={person.id}
              change={(event) => this.onChangeName(event, person.id)} />
          })}
        </div>
      )
    }

    const charList = this.state.inputValues.split('').map((ch, index) => {
      return <CharCard varchar={ch} key={index} delete={() => this.onChickDeleteCard(index)} />
    })

    if (this.state.isShowAssignment) {
      Assignment = (
        <div>
          <p>Show assignment</p>
          <input
            type='text'
            onChange={this.inputChangeHendler}
            value={this.state.inputValues} />
          <p>{this.state.inputValues}</p>
          <Validate textLength={this.state.inputValues.length} />
          {charList}
        </div>
      )
    }

    return (
      <div>
        <p>Hello world</p>
        <button onClick={this.onClickShowDiv}>Show Div</button>
        <button onClick={this.onClickShowAssignment}>Show Assignment</button>
        {person}
        {Assignment}
      </div>
    );
  }
}



export default App;
