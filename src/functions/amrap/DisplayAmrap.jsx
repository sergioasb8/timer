import React from 'react';

import '../Display.css';

function DisplayAmrap(props) {
    return (
        <h1 className="counter" style={{color: 'black'}}>
            <span>{(props.time.m > 9.9)? props.time.m : '0' + props.time.m}</span>&nbsp;:&nbsp;
            <span>{(props.time.s > 9.9)? props.time.s : '0' + props.time.s}</span>
        </h1>
    )
}

export default DisplayAmrap;