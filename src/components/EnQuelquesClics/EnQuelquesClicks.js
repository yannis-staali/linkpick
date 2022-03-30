import React, {useEffect} from "react"
import "./EnQuelquesClicks.css"
import {textes} from "./textes"
import enqqclick_person from "../../images/enqqclics_person.png"
import enqqclick_main from "../../images/enqqclics_main.png"
import enqqclick_plateforme from "../../images/enqqclics_plateforme.png"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ScrollToPlugin} from  "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const EnQuelquesClicks = () =>{

    useEffect(() => {

        //Animation cardOne
        // gsap.from(".enQqClics_container", {
        //     scrollTrigger: ".trrigersec2",
        //     start: "center",
        //     x:-400,
        //     duration:1
        // });

        //Animation cardOne
        gsap.from(".enQqClics_h1", {
            scrollTrigger: ".trrigersec2",
            x:-200,
            y:50,
            duration:1
        });

        
        gsap.fromTo(
            ".enQqClics_container",
            {
                opacity: 0,
                x:-400,
            },
            {
                opacity:1,
                x:0,
                // delay: delay || 0.4,
                duration:1.5,
                scrollTrigger: {
                    trigger: ".trrigersec2",
                    // start: "bottom",
                    // end: "bottom center"
                }
    
            }
        )

    }, [])


    function CardEnQuelquesClick({img, textes_h2, textes_h3, textes_p, nomclass}){

        return(
            <div className={nomclass} >
                <div>
                    <img className="enQqClics_img" src={img}></img>
                </div>
                <div>
                    <h2 className="enQqClics_h2">
                        {textes_h2}
                    </h2>
                    <h3 className="enQqClics_h3">
                        {textes_h3}
                    </h3>
                    <p className="enQqClics_p">
                        {textes_p}
                    </p>
                </div>
            </div>
        )

    }

    return(

        <div className="enQqClics_container">
            <div className="enQqClicssous_container">               
                <h1 className='enQqClics_h1'>En quelques clics ...
                </h1>
                <CardEnQuelquesClick 
                    nomclass={"enQqClics_card_container_bleu"}
                    img={enqqclick_person} 
                    textes_h2={textes.h2_cv}
                    textes_h3={textes.h3_cv}
                    textes_p={textes.p_cv}
                />
                <CardEnQuelquesClick 
                    nomclass={"enQqClics_card_container"}
                    img={enqqclick_main} 
                    textes_h2={textes.h2_organismes}
                    textes_h3={textes.h3_organismes}
                    textes_p={textes.p_organismes}
                />
                <CardEnQuelquesClick 
                    nomclass={"enQqClics_card_container"}
                    img={enqqclick_plateforme} 
                    textes_h2={textes.h2_plateforme}
                    textes_h3={textes.h3_plateforme}
                    textes_p={textes.p_plateforme}
                />       
            </div>
        </div>
    )
}


export default EnQuelquesClicks