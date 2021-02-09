import React, {useState} from 'react';

import '../style/ForTimeAmrap.css';

import DisplayForTime from '../functions/for-time/DisplayForTime';
import StratForTime from '../functions/for-time/StartForTime';

function ForTime(){

     // Hook para manejar el valor de entrada
     const [ itemName, setItemName] = useState('');
     // useState para manejar las variables que controlan el tiempo
     const [time, setTime] = useState({ms:0, s:0, m:0});
     // useState para manejar el valor de setInterval
     const [interv, setInterv] = useState();
     // useState para manejar qué botones son visibles
     const [status, setStatus] = useState(0);
     // vars to change the value of ms, s, m & h ans the pass it to the setTime counter 
     //vars para cambiar el valor de ms, s, m & h y pasarlo al contador setTime
     let updateMs = time.ms, updateS = time.s, updateM = time.m;
 
     // function to call at the button start
     const  start = e => {
         e.preventDefault();
         /*Cancela el evento si este es cancelable, sin detener el 
         resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.*/
         //va a permitir iniciar las cosas sin recargar la pag
         
         run();//ejecuta la funcion
         setStatus(1);//cambia el estado a 1 para sangan los botonrd stop y reset
         setInterv(setInterval(run, 10)); //es para la velocidad con la cual se 
     } 
 
     const run = () => {
         if(updateM == 60) {
             updateM = 0;
         }//se la variables que modifica los minutos llega a 60 se re asiga el o
 
         if(updateS == 60) {
             updateM ++;
             updateS = 0;
         }/*se los segundos llegan a 60 se le aumenta a los minutos y se reasigna 
         el valor de los segundos a 0 */
 
         if(updateMs == 100) {
             updateS ++;
             updateMs = 0;
         }/*se los milisegindos llegan a 100 se le suma 1 a segundos y se 
         reasigna el valos del ms a 0 */

         if(updateM == itemName) {
            clearInterval(interv);
            /* */
            /*se el valor de minutos es igual al valor actual captado por el 
            imput se va a parar */
         } else {
            updateMs ++;
            /*si esto no es asi los Milisegundos van a segir contando */
         }

         return setTime({ms:updateMs, s:updateS, m:updateM});
         //retorna los valores actualizados 
     };
 
     const  stop = () => {
         clearInterval(interv);
         setStatus(2);
     } /*detiene el contador y cambia el estatus a 2 cambiando a si 
     mismo los botones que se muestran siendo estos resume y reset */
 
     const  reset = () => {
         clearInterval(interv);
         setStatus(0);
         setTime({ms:0, s:0, m:0});
     } /*para el contador, lo deja en los parametros iniciales y cambia el 
     estado a 0 mostrando el start  */
 
     const  resume = () => {
         run();
         setStatus(1);
         setInterv(setInterval(run, 10));
     } /*vuelve a retomar el contador con la misma veloscidad en los milisegundos
     y cambia el estado a 1 mostrando de nuevo el estop y reset */

        return(
        <div className="container-Fortime">
            <div className="row">
                <div className="col">
                    <div>
                        <h1 className="d-flex">For Time</h1>

                            <DisplayForTime time={time} />
                        
                    </div>
                    <div className="btn-group" role="group">
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
                        <StratForTime status={status} start={start} stop={stop} reset={reset} resume={resume}/>
                    </div>
                    
                </div>
            </div>
        </div>
        )
}

export default ForTime;