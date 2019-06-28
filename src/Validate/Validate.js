import React from 'react';
import Radium from 'radium'
const Validate = (props) => {
    let validateLength = 'Text too short'
    if (props.textLength > 5) {
        validateLength = 'Text too enough'
    }
    return <div>
        {validateLength}
    </div>
}

export default Radium(Validate)