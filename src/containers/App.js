import React, { Component } from 'react';
import css from './App.css';
import Validate from '../components/Validate/Validate';
import CharCard from '../components/Assignment/CharCard/CharCard';
import Persons from '../components/Person/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps')
    return state
  }



  componentDidMount() {
    console.log('[App.js] componentDidMount')
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
    console.log('[App.js] render')

    let person = null
    let Assignment = null
    let btnColor = ''


    if (this.state.isShowDiv) {
      person = (
        <div>
          <Persons
            persons={this.state.person}
            click={this.onChickDelete}
            change={this.onChangeName}
          />
        </div>
      )
      btnColor = css.yellow
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
      btnColor = css.Red
    }

    //let classes = ['red','bold'].join(' ')
    const classes = []
    if (this.state.person.length <= 2) {
      classes.push(css.red)
    }
    if (this.state.inputValues.length > 5) {
      classes.push(css.bold)
    }

    return (
      <div className={css.HelloWorld}>
        <p className={classes.join(' ')}>{this.props.titile}</p>
        <button className={btnColor} onClick={this.onClickShowDiv}>Show Div</button>
        <button className={btnColor} onClick={this.onClickShowAssignment}>Show Assignment</button>
        {person}
        {Assignment}
      </div>
    );
  }
}



export default App;
