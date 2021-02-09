import React from 'react';
import DisplayEmomWork from './DisplayEmomWork';

import '../Display.css';

function DisplayEmomRest (props) {
    return (
        <div className="counter">
            <span>{(props.timeRest.mr > 9.9)? props.timeRest.mr : '0' + props.timeRest.mr}</span>&nbsp;:&nbsp;
            <span>{(props.timeRest.sr > 9.9)? props.timeRest.sr : '0' + props.timeRest.sr}</span>
        </div>
    )
}

export default DisplayEmomRest;