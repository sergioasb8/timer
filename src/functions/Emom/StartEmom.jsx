import React from 'react';

function StartEmom(props) {
    return (
        <div>
            <div>
                {(props.status === 0) ? 
                    <button onClick={props.startWork}>Start</button> : ""
                }
                {(props.status === 1) ? 
                    <div>
                        <button onClick={props.stopWork}>Stop</button> 
                        <button onClick={props.resetWork}>Reset</button>
                    </div> : ""
                }
                {(props.status === 2) ? 
                    <div>
                        <button onClick={props.resumeWork}>Resume</button>
                        <button onClick={props.resetWork}>Reset</button>
                    </div> : ""
                }
            </div>
        </div>
    )
}

export default StartEmom;