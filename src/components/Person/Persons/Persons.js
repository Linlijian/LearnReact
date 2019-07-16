import React, { Component } from 'react';
import Person from '../Person'

class Persons extends Component {
  
  // static getDerivedStateFromProps (props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }
  
  shouldComponentUpdate(nextPorps, nextState){
    console.log('[Persons.js] shouldComponentUpdate -- จะทำหน้าที่คอยตัดสินว่าควรจะทำการ render component ซ้ำหรือไม่')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    //return null
    return {message: 'Snapshot'}
  }

  componentDidUpdate(prevProps,prevState,Snapshot){
    console.log('[Persons.js] componentDidUpdate -- จะทำงานเมื่อมีการ update state หรือ props โดยจะทำงานหลังจาก render เสร็จแล้ว')
    console.log(Snapshot)
  }

  render() {
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        click={() => this.props.click(index)}
        //click={() => this.onChickDelete(index)}
        key={person.id}
        change={(event) => this.props.change(event, person.id)}
      //change={(event) => this.onChangeName(event, person.id)}
      />
    })
  }
}


export default Persons