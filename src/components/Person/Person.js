import React from 'react';
import css from './Person.css';


const Person = (props) => {
    console.log('[Person.js] rendering...')
    return (
        <div className={css.Person}>
            <p onClick={props.click}>Person this here. My name {props.name}</p>
            <p>{props.children}</p>
            <input onChange={props.change}></input>
        </div>
    )
}

export default Person;