import React from 'react';

import '../Display.css';

function DisplayEmomWork(props) {
    return (
        <div className="counter">
            <span>{(props.timeWork.mw > 9.9)? props.timeWork.mw : '0' + props.timeWork.mw}</span>&nbsp;:&nbsp;
            <span>{(props.timeWork.sw > 9.9)? props.timeWork.sw : '0' + props.timeWork.sw}</span>
        </div>
    )
}

export default DisplayEmomWork;