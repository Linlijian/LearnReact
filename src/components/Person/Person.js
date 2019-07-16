import React, { Component } from 'react';
import css from './Person.css';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={css.Person}>
                <p onClick={this.props.click}>Person this here. My name {this.props.name}</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.change}></input>
            </div>
        )
    }
}

export default Person;