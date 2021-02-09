import React from 'react';

import '../style/Inicio.css';

class Banner extends React.Component{
    render(){
        return(
            <div className="banner">
                <div className="banner-item" id="CronometerTitle">
                    <h2 className="banner-title">Cronometro</h2>
                    <p className="banner-info">Cronometro tradicional.</p>
                </div>
                <div className="banner-item" id="TabataTitle">
                    <h2 className="banner-title">Tabata</h2>
                    <p className="banner-info">El método Tabata es un entrenamiento interválico de alta intensidad. Usualmente son 8 rondas que constan de 20 segundos de trabajo y 10 segundos de descanso.</p>
                </div>
                <div className="banner-item" id="ForTimeTitle">
                    <h2 className="banner-title">For Time</h2>
                    <p className="banner-info">El método For Time busca realizar cierto número de rondas de un conjunto de ejercicios lo más rápido posible.</p>
                </div>
                <div className="banner-item" id="EmomTitle">
                    <h2 className="banner-title">Emom</h2>
                    <p className="banner-info">El método Emom es una forma de entrenamiento donde se deben realizar un set de ejercicios cada minuto mientras el reloj avanza.</p>
                </div>
                <div className="banner-item" id="AmrapTitle">
                    <h2 className="banner-title">Amrap</h2>
                    <p className="banner-info">El método Amrap se basa en alcanzar la mayor cantidad de repeticones posibles en un período de tiempo determinado</p>
                </div>
            </div>
        )
    }
}

export default Banner;