import React from 'react';

import '../Display.css'

function DisplayWork(props) {
    return (
        <div className="counter">
            <span>{(props.timeWork.s > 9.9)? props.timeWork.s : '0' + props.timeWork.s}</span>
        </div>
    )
}

export default DisplayWork;