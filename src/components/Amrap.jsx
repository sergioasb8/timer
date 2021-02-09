import React, { useState } from 'react';
import '../style/ForTimeAmrap.css';
import DisplayAmrap from '../functions/amrap/DisplayAmrap';
import StartAmrap from '../functions/amrap/StartAmrap';

function Amrap () {

    // Hook to handle the input value
    const [ itemName, setItemName] = useState('');
    // useState to handle the vars which control the time  
    const [time, setTime] = useState({ms:100, s:0, m:0});
    // useState to handle the value of setInterval
    const [interv, setInterv] = useState();
    // useState to handle which buttons are visible
    const [status, setStatus] = useState(0);
    // vars to change the value of ms, s, m & h ans the pass it to the setTime counter 
    let updateMs = time.ms, updateS = time.s, updateM = time.m;
    // var to check condition
    let conditionM = false;

    // function to call at the button start
    const  start = e => {
        e.preventDefault();
        if (itemName >= 1) {
            updateM = itemName;
        } 
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    } 

    const run = () => {
        if(updateM < 0) {
            clearInterval(setInterv);
        }

        if(updateS == 0) {
            if (updateM - 1 < 0) {
                clearInterval(setInterv);
            } else {
                updateM --;
                updateS = 59;
            }            
        }

        if(updateMs == 0) {
            if (updateS <= 0 && updateM == 0) {
                clearInterval(setInterv);
            } else {
            updateS --;
            updateMs = 99;
            }
        }

        if (updateM < 0) {
            clearInterval(setInterv);
        } else {
        updateMs --;
        }
        return setTime({ms:updateMs, s:updateS, m:updateM});
    };

    const  stop = () => {
        clearInterval(interv);
        setStatus(2);
    } 

    const  reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:100, s:0, m:0});
    } 

    const  resume = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    } 

    return (
        <div className="container-Amrap">
            <div className="row">
                <div className="col">
                    <div>
                        <h1 className="d-flex">Amrap</h1>
                        <DisplayAmrap time={time} />
                    </div>
                    <div className="btn-group " role="group">
                        <p className="d-flex">FOR</p>
                        
                        <form className="form-container">  
                            <label>
                                <input
                                    onChange={event => setItemName(event.target.value)}
                                    placeholder='00'
                                />
                            </label>
                        </form>
                        <p className="d-flex">MINUTES</p>
                        
                    </div>
                    <div className="btn-group" role="group">
                        <StartAmrap status={status} start={start} stop={stop} reset={reset} resume={resume}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amrap;