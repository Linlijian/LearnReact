import React from 'react';
import './Person.css'
import Radium from 'radium'

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Person this here. My name {props.name}</p>
            <p>{props.children}</p>
            <input onChange = {props.change}></input>
        </div>
    )
}

export default Radium(Person);