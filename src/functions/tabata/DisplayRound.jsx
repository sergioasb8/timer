import React from 'react';

import '../Display.css'

function DisplayRound(props) {
    return (
        <div className="counter">
            <span>{(props.timeRounds.Rounds > 9.9)? props.timeRounds.Rounds : '0' + props.timeRounds.Rounds}</span>
        </div>
    )
}

export default DisplayRound;