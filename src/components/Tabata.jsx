import React, {useState} from 'react';

import '../style/Tabata.css';

import DisplayRound from '../functions/tabata/DisplayRound';
import DisplayWork from '../functions/tabata/DisplayWork';
import DisplayRest from '../functions/tabata/DisplayRest';
import StartTabata from '../functions/tabata/StartTabata';

function Tabata(){
     // Hook to handle the input value
     const [ itemRounds, setItemRounds] = useState('');
     // useState to handle the vars which control the counter of rounds
     const [timeRounds, setTimeRounds] = useState({Rounds: 0, noImporta:0});

     // Hook para manejar el valor de entrada
     const [ itemWork, setItemWork] = useState('');
     // useState para manejar las variables que controlan el tiempo de trabajo
     const [timeWork, setTimeWork] = useState({ms:0, s:0});

     // Hook para manejar el valor de entrada
     const [ itemRest, setItemRest] = useState('');
     // useState para manejar las variables que controlan el tiempo de descanso
     const [timeRest, setTimeRest] = useState({ms:0, s:0});

     // useState para manejar el valor de setInterval
     const [interv, setInterv] = useState();
     // useState para manejar qué botones son visibles
     const [status, setStatus] = useState(0);
    
    //vars para cambiar el valor de ms, s, m & h y pasarlo al contador setTime
    let updateRound = timeRounds.Rounds
    let updateWorkMs = timeWork.ms, updateWorkS = timeWork.s
    let updateRestMs = timeRest.ms, updateRestS = timeRest.s

     // function to call at the button start
     const  start = e => {
        e.preventDefault();
        /*Cancela el evento si este es cancelable, sin detener el 
        resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.*/
        //va a permitir iniciar las cosas sin recargar la pag
        run();//ejecuta la funcion
        setStatus(1);//cambia el estado a 1 para que salgan los botones de stop y reset
        setInterv(setInterval(run, 10)); //es para la velocidad con la cual avanzan los ms 
    } 

    const run = () => {
        if(updateWorkS == 60) {
            updateWorkS = 0;
        }
        /*si compara el updateWorks con 60 si son iguales reinicia el updateWorks a 0 */
        if(updateWorkMs == 100) {
            updateWorkS ++;
            updateWorkMs = 0;
        }
        /*compara los milisegundos y si son iguales a 100 le suma uno a los segundos
        y reinicia los ms */

/*en este condicion debe decir que si el contador es igual al valor del input
entonces debe  correr los cambios en el Reset*/
        if(updateWorkS == itemWork) {
           clearInterval(interv);
           /*si los segundos de work es igual al valor de su input va a parar los
           segundos y a ejecutar los regundos de descanso */

           if(updateRestS == 60) {
            updateRestS = 0;
            }
        
            if(updateRestMs == 100) {
                updateRestS ++;
                updateRestMs = 0;
            }
            /*en este condicion debe decir que si el contador es igual al valor del input
    entonces debe  correr los cambios en el Round*/
            if(updateRestS == itemRest) {
            clearInterval(interv);
    
                if(updateRound == itemRounds) {
                    clearInterval(interv);
                /*si  las rondas son iguales al valor del introducido en le input
                de ronunds se para los segundos de rondas */
                } else {
                    /*si no pasas eso se sigue sumando a rounds*/
                    if(updateRound < itemRounds-1){
                        updateRestS = 0;
                        updateWorkS = 0;
                        /* si el contador de rondas en menor a el input -1 de las rondas
                        entonces se reinicion los contadores de trabajo y descanso*/
                        /*se le dice que itemRounds -1 para que en la ultima ronda no 
                        corra demas los contadores de trabajo y descanso */
                    }
                    updateRound ++;
                }

            } else {
                updateRestMs ++;
            }

        } else {
            updateWorkMs ++;
        }


        return setTimeWork({ms:updateWorkMs, s:updateWorkS}), setTimeRest({ms:updateRestMs, s:updateRestS}), setTimeRounds({Rounds:updateRound});
        
    };



    const  stop = () => {
        clearInterval(interv);
        setStatus(2);
    } 

    const  reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTimeWork({ms:0, s:0});
        setTimeRest({ms:0, s:0});
        setTimeRounds({Rounds:0});
    } 

    const  resume = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    } 


    return(
        <div className="container-Tabata">
        <div className="row">
            <div className="col">
                <div>
                    <h1 className="d-flex">Tabata</h1>
                    <div className="btn-group" role="group">
                        <p className="d-flex">ROUNDS</p>

                        <DisplayRound  timeRounds={timeRounds} />

                    </div>
                    <div className="btn-group" role="group">
                        <p className="d-flex">WORK</p>
                        
                        <DisplayWork timeWork={timeWork} />

                        <p className="d-flex">REST</p>
                        <DisplayRest timeRest={timeRest} />
                    </div>
                </div>
                <div className="btn-group" role="group">
                    <p className="d-flex" id="d-flex">FOR</p>

                        <form className="form-container">  
                            <label>
                                <input
                                    onChange={event => setItemRounds(event.target.value)}
                                    placeholder='00'
                                />
                            </label>
                        </form>
                    
                    <p className="d-flex" id="d-flex">ROUND</p>
                </div>
                <div className="btn-group" role="group">
                    <p className="d-flex" >WORK</p>
                    
                        <form className="form-container">  
                            <label>
                                <input
                                    onChange={event => setItemWork(event.target.value)}
                                    placeholder='00'
                                />
                            </label>
                        </form>
                    
                    <p className="d-flex">SECONDS</p>
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
                    
                    <p className="d-flex">SECONDS</p>
                </div>
                <div className="btn-group" role="group">

                    <StartTabata status={status} start={start} resume={resume} stop={stop} reset={reset} />
        
                </div>
                
            </div>
        </div>
    </div>
    )
}


export default Tabata;
