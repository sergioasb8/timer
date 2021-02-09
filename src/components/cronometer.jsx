import React, { useState } from 'react';
import '../style/Cronometer.css';
import StartCro from '../functions/cronometer/StartCro';
import DisplayCro from '../functions/cronometer/DisplayCro';
import DisplayList from '../functions/cronometer/DisplayList';

function Cronometer() {

    // Hooks useState
    // useState to handle the vars which control the time  
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    // useState to handle the value of setInterval
    const [interv, setInterv] = useState();
    // useState to handle which buttons are visible
    const [status, setStatus] = useState(0);
    // Not started = 0
    // Started = 1
    // Continue
    // useState to handle the list records
    const [itemList, setItemList] = useState([]);

    // function to call at the button start
    const  start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    } 

    // vars to change the value of ms, s, m & h ans the pass it to the setTime counter 
    let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

    const run = () => {
        if(updateM == 60) {
            updateH ++;
            updateM = 0;
        }

        if(updateS == 60) {
            updateM ++;
            updateS = 0;
        }

        if(updateMs == 100) {
            updateS ++;
            updateMs = 0;
        }

        updateMs ++;
        return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH});
    };

    const  stop = () => {
        clearInterval(interv);
        setStatus(2);
    } 

    const  reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0});
    } 

    const  resume = () => {
        start();
    } 

    const addRecord = () => {

        let timeString = "", hString = "", mString = "", sString = "";

        hString = (time.h > 9.9)? time.h : '0' + time.h;
        mString = (time.m > 9.9)? time.m : '0' + time.m;
        sString = (time.s > 9.9)? time.s : '0' + time.s;
        timeString = `${hString}:${mString}:${sString}`;

        setItemList([
            //  grab all the items inside the array at the moment and add the new
            // items inside the object
            ...itemList, 
            // the object 
            {
                id: itemList.length,
                name: timeString
            }
        ])
    }

    const deleteRecords = () => {
        let x = 0;

        for(x=0; x <= itemList.length * 2; x++) {
            itemList.shift();
            itemList.pop();
        }
    }

    return(
        <div className="container-cronometer">
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Cronómetro</h1>
                        <DisplayCro time={time} />
                    </div>
                    
                    <div className="btn-group mb-2 d-flex justify-content-center" role="group">
                        <StartCro 
                            status={status} 
                            start={start} 
                            stop={stop} 
                            reset={reset} 
                            resume={resume}
                            addRecord={addRecord} 
                            deleteRecords = {deleteRecords} />                        
                    </div>
                    <div className="tiempos">
                        <h5 className="d-flex justify-content-center">Tiempos Grabados</h5>
                        <DisplayList itemList={itemList} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cronometer;