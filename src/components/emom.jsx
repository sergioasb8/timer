import React, { useState } from 'react';

import '../style/Emom.css';

import StartEmom from '../functions/Emom/StartEmom';
import DisplayEmomWork from '../functions/Emom/DisplayEmomWork';
import DisplayEmomRest from '../functions/Emom/DisplayEmomRest';
import DisplayEmomRounds from '../functions/Emom/DisplayEmomRounds';

function Emom() {
    
    // useState Rounds
    const [ itemRounds, setItemRounds] = useState('');
    const [timeRounds, setTimeRounds] = useState({rounds:0, roundsTwo:0});
    // useState Work
    const [ itemWork, setItemWork] = useState('');
    const [timeWork, setTimeWork] = useState({msw:0, sw:0, mw:0});
    // useState Rest
    const [ itemRest, setItemRest] = useState('');
    const [timeRest, setTimeRest] = useState({msr:0, sr:0, mr:0});

    // set interval 
    const [intervW, setIntervW] = useState();

    const [status, setStatus] = useState(0);

    // vars to change the value of ms, s, m & h ans the pass it to the setTime counter 
    // Work var
    let updateMsW = timeWork.msw, updateSW = timeWork.sw, updateMW = timeWork.mw;
    // Rest var
    let updateMsR = timeRest.msr, updateSR = timeRest.sr, updateMR = timeRest.mr;
    // Rounds var
    let updateRounds = timeRounds.rounds;

    // function to call at the button start
    const  startWork = () => {
        runWork();
        setStatus(1);
        setIntervW(setInterval(runWork, 10));
    } 
    
    const runWork = () => {
        
        // start with work minutes
        if(updateMW == 60) {
            updateMW = 0;
        }

        if(updateSW == 60) {
            updateMW ++;
            updateSW = 0;
        }

        if(updateMsW == 100) {
            updateSW ++;
            updateMsW = 0;
        }
        // if work minute are over then go to rest minutes
        if(updateMW >= itemWork) {
            clearInterval(intervW);
            if(updateMR == 60) {
                updateMR = 0;
            }
    
            if(updateSR == 60) {
                updateMR ++;
                updateSR = 0;
            }
    
            if(updateMsR == 100) {
                updateSR ++;
                updateMsR = 0;
            }
            // if minutes to rest are over then
            if(updateMR >= itemRest) {

                if(updateRounds < itemRounds) {
                    if(updateRounds < itemRounds -1) {
                        updateMW = 0;
                        updateMR = 0;
                    }
                    updateRounds ++;
                } else {
                    clearInterval(intervW);
                }

            } else {
                updateMsR ++;
            }
            
        
        // if work minutes are not over, keep adding
        } else {
            updateMsW ++;
        }
        
        return (
            setTimeWork({msw:updateMsW, sw:updateSW, mw:updateMW}) +
            setTimeRest({msr:updateMsR, sr:updateSR, mr:updateMR}) +
            setTimeRounds({rounds:updateRounds})
        );
    };

    const  stopWork = () => {
        clearInterval(intervW);
        setStatus(2);
    } 

    const  resetWork = () => {
        clearInterval(intervW);
        setStatus(0);
        setTimeWork({msw:0, sw:0, mw:0});
        setTimeRest({msr:0, sr:0, mr:0});
    } 

    const  resumeWork = () => {
        startWork();
        setStatus(1);
    } 
    return(
        <div className="container-Emom">
            <div className="row">
                <div className="col">
                    <div>
                        <h1 className="d-flex">Emom</h1>
                        <div className="btn-group" role="group">
                            <p className="d-flex">Rounds</p>
                            <DisplayEmomRounds timeRounds={timeRounds} />
                        </div>

                        <div className="btn-group" role="group">
                            <p className="d-flex">WORK</p>
                            <DisplayEmomWork timeWork={timeWork} />
                            <p className="d-flex">REST</p>
                            <DisplayEmomRest timeRest={timeRest} />
                        </div>

                    </div>

                    <div className="btn-group" role="group">
                        <p className="d-flex">FOR</p>
                        <form className="form-container">  
                            <label>
                                <input
                                    onChange={event => setItemRounds(event.target.value)}
                                    placeholder='00'
                                />
                            </label>
                        </form>
                        <p className="d-flex">ROUNDS</p>
                    </div>

                    <div className="btn-group" role="group">
                        <p className="d-flex">WORK</p>
                        <form className="form-container">  
                            <label>
                                <input
                                    onChange={event => setItemWork(event.target.value)}
                                    placeholder='00'
                                />
                            </label>
                        </form>
                        <p className="d-flex">MINUTES</p>
                    </div>

                    <div className="btn-group" role="group">
                        <p className="d-flex">REST</p>
                        <form className="form-container">  
                            <label>
                                <input
                                    onChange={event => setItemRest(event.target.value)}
                                    placeholder='00'
                                />
                            </label>
                        </form>
                        <p className="d-flex">MINUTES</p>
                    </div>

                    <div className="btn-group" role="group">
                        <StartEmom 
                            status={status}
                            startWork={startWork} 
                            stopWork={stopWork} 
                            resetWork={resetWork} 
                            resumeWork={resumeWork} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emom;