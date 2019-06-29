import React from 'react';

const CharCard = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '2px solid block',
        textAlign: 'center',
        backgroundColor: 'yellow',
        '@media (min-width: 500px)': {
            width: '20px'
        }
    }
    return (
        <div onClick={props.delete} style={style}>{props.varchar}</div>
    )
}

export default CharCard