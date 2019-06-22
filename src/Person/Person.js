import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>Person this here. My name {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;