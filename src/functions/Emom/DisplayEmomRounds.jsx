import React from 'react';

import '../Display.css';

function DisplayEmomRounds (props) {
    return (
        <div className="counter">
            <span>{(props.timeRounds.rounds > 9.9)? props.timeRounds.rounds : '0' + props.timeRounds.rounds}</span>
        </div>
    )
}

export default DisplayEmomRounds;