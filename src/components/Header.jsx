import React, {useState} from 'react';
import logo2 from '../img/relojcrosfitero .png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header () {

    // /*variables */
    // let MenuToggle = document.querySelector('.menu-toggle')
    // let MenuToggleIcon = document.querySelector('.menu-toggle i')
    // let Menu = document.getElementById('menu')

    //     /*esto hace que cambie el icono */

    //     if(Menu.classList.contains('show')){
    //         MenuToggleIcon.setAttribute('class', 'fa fa-times');
    //     }
    //     else{
    //         MenuToggleIcon.setAttribute('class', 'fa fa-bars');
    //     }
    //     })

    const [estadoMostrar, setEstadoMostrar] = useState('');

    const handleMostrar = () => {
        if(estadoMostrar == '') {
            setEstadoMostrar('show');
        } else {
            setEstadoMostrar('');
        }
    }

    return (
        <header>
            <div>
                <img src={logo2} className="Nav-logo" alt="logo"/>
            </div>

            <nav id="menu" className={estadoMostrar}>
                <ul>
                    <li><button type="button" onClick={handleMostrar} className="btn" id="Inicio"><Link to="/" style={{ color: 'white', textDecoration: 'none'}}>Inicio</Link></button></li>
                    <li> <button type="button" onClick={handleMostrar} className="btn" id="Cronometer"><Link to="/Cronometer" style={{ color: 'white', textDecoration: 'none'}}>Cronometro </Link></button></li>
                    <li><button type="button" onClick={handleMostrar} className="btn" id="Tabata"><Link to="/Tabata" style={{ color: 'white', textDecoration: 'none'}}>Tabata</Link></button></li>
                    <li><button type="button" onClick={handleMostrar} className="btn" id="ForTime"><Link to="/ForTime" style={{ color: 'white', textDecoration: 'none'}}>For Time</Link></button></li>
                    <li><button type="button" onClick={handleMostrar} className="btn" id="Emom"><Link to="/Emom" style={{ color: 'white', textDecoration: 'none'}}>Emom</Link></button></li>
                    <li><button type="button" onClick={handleMostrar} className="btn" id="Amrap"><Link to="/Amrap" style={{ color: 'white', textDecoration: 'none'}}>Amrap</Link></button></li>
                </ul>

            </nav>
            <div className="menu-toggle" onClick={handleMostrar} >
                <i className="fas fa-bars"></i>
            </div>
        </header>
    )
}

export default Header;