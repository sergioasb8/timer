import React from 'react';
import '../Display.css';

function DisplayCro(props) {
    return (
        <h1 style={{color: 'black'}}>
            <span>{(props.time.h > 9.9)? props.time.h : '0' + props.time.h}</span>&nbsp;:&nbsp;
            <span>{(props.time.m > 9.9)? props.time.m : '0' + props.time.m}</span>&nbsp;:&nbsp;
            <span>{(props.time.s > 9.9)? props.time.s : '0' + props.time.s}</span>
        </h1>
    )
}

export default DisplayCro;