import React from 'react';
import { useEffect } from 'react';
import EssentielImg from '../../images/essentiel.png';
import "./Section3.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ScrollToPlugin} from  "gsap/ScrollToPlugin";

const slideCard = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            y:200
        },
        {
            opacity:1,
            y:0,
            delay: delay || 0.4,
            duration: duration || 0.6,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center"
            }

        }
    )
}

const slideToTop = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            y:-200
        },
        {
            opacity:1,
            y:0,
            delay: delay || 0.4,
            duration: duration || 0.6,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center"
            }

        }
    )
}


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Section3() {

    useEffect(() => {
        // slideCard(".essentiel_bottom_img");

        //Animation cardThree
        gsap.from(".essentiel_bottom_img", {
            scrollTrigger: ".essentiel_bottom_img",
            y:100,
            duration:1,
            start: "300px"
        });
    }, [])

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