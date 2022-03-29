import React from 'react';
import EssentielImg from '../../images/essentiel.png';
import "./Section3.css";

function Section3() {
  return (
    <div className='essentiel_container'>
        <div className="essentiel">
            <div className="essentiel_top">
                <h1 className='essentiel_top_title'>Concentrez-vous sur l'essentiel avec <span className="ii">Linkpick</span></h1>
                <p className='essentiel_top_text'>La solution Linkpick est conçue pour piloter facilement et au même endroit sa vie étudiante.
                    Gagnez du temps pour les échanges qui comptent vraiment.
                </p>
            </div>
            <div className="essentiel_bottom">
                <img className='essentiel_bottom_img' src={EssentielImg} alt="" />
            </div>  
        </div>
    </div>
  )
}

export default Section3