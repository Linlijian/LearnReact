import React from 'react'
import css from './CharCard.css';

const CharCard = (props) => {
    return (
        <div className={css.card} onClick={props.delete}>{props.varchar}</div>
    )
}

export default CharCard