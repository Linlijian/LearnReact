import React from 'react';
import './Person.css'
import Radium from 'radium'

const Person = (props) => {
    const staly = {
        '@media (minwidth: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={staly}>
            <p onClick={props.click}>Person this here. My name {props.name}</p>
            <p>{props.children}</p>
            <input onChange = {props.change}></input>
        </div>
    )
}

export default Radium(Person);