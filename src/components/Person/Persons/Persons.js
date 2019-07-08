import React from 'react';
import Person from '../Person'

const Persons = (props) =>{
  console.log('[Persons.js] rendering...')
  return props.persons.map((person, index) => {
    return <Person
      name={person.name}
      click={() => props.click(index)}
      //click={() => this.onChickDelete(index)}
      key={person.id}
      change={(event) => props.change(event, person.id)}
      //change={(event) => this.onChangeName(event, person.id)}
       />
  })
} 


export default Persons