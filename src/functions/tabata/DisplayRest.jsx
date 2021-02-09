import React from 'react';

import '../Display.css'

function DisplayReset(props) {
    return (
        <div className="counter">
            <span>{(props.timeRest.s > 9.9)? props.timeRest.s : '0' + props.timeRest.s}</span>
        </div>
    )
}

export default DisplayReset;