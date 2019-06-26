import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <p>Person this here. My name {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;