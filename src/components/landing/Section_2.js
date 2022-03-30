import React, {useEffect} from "react";
import EnQuelquesClicks from "../EnQuelquesClics/EnQuelquesClicks"
import './section_2.css'
import './Section3.css'
import manPicture from "../../images/manPicture.png"
import bosco from "../../images/bosco.svg"
import signe from "../../images/signe.svg"
import orange from "../../images/orange.svg"
import general from "../../images/general.svg"
import girl from "../../images/girl.svg"
import signer from "../../images/Signer.svg"
import fete from "../../images/fete.svg"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ScrollToPlugin} from  "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Section_2 = ()=>{

    useEffect(() => {

        //Animation 
        // gsap.from(".cardsPart", {
        //     scrollTrigger: ".cardsPart",
        //     y:-400,
        //     duration:2
        // });


        gsap.fromTo(
            ".cardsPart",
            {
                opacity: 0,
                y:-200
            },
            {
                opacity:1,
                y:0,
                // delay: delay || 0.4,
                duration:1.5,
                scrollTrigger: {
                    trigger: ".trrigersec2",
                    // start: "bottom",
                    // end: "bottom center"
                }
    
            }
        )

        gsap.fromTo(
            ".bonhommeContain",
            {      
                // opacity: 0,
                x:400
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

        // gsap.fromTo(
        //     ".backgroundPart",
        //     {      
        //         opacity: 0,
        //         x:500
        //     },
        //     {
        //         opacity:1,
        //         x:0,
        //         // delay: delay || 0.4,
        //         duration:1,
        //         scrollTrigger: {
        //             trigger: ".trrigersec2",
        //             // start: "bottom",
        //             // end: "bottom center"
        //         }
    
        //     }
        // )

    }, [])

    return(

        <div className="container_section_2">
            <div  className="container_en_qq_clics">
                <div className="container_gauche">
                    <EnQuelquesClicks/>
                </div>
                <div className="container_droite">
                   <div className="sous_container_droite">
                        <div className="cardsPart">
                            <div className="card_One">
                                <div className="card_One_left">
                                    <img  className='iconCard_left' src={bosco} alt='' />
                                </div>
                                <div className="card_One_middle">
                                    <p>Lycée Don Bosco <br/> Contrat d'apprentissage</p>
                                </div>
                                <div className="card_One_right">
                                    <img  className='iconCard_RIGHT' src={signe} alt='' />
                                </div>
                            </div>
                            <div className="card_Two">
                                <div className="card_Two_left">
                                    <img  className='iconCard_left' src={general} alt='' />
                                </div>
                                <div className="card_Two_middle">
                                    <p>Lycée Don Bosco <br/> Contrat d'apprentissage</p>
                                </div>
                                <div className="card_Two_right"> 
                                    <img  className='iconCard_RIGHT_two' src={orange} alt='' />
                                </div>
                            </div>
                            <div className="card_Three">
                                <div className="card_Three_left">
                                    <img  className='iconCard_left' src={fete} alt='' />
                                </div>
                                <div className="card_Three_middle">
                                    <h3 className="three_title">Tu as un nouveau contrat !</h3>
                                    <p className="three_text">Alternance chez Conseil Général</p>
                                </div>
                            </div>
                            <div className="card_Four">
                                <div className="card_Four_left">
                                    <img  className='iconCard_left' src={girl} alt='' />
                                </div>
                                <div className="card_Four_middle">
                                    <p>Lycée Don Bosco <br/> Contrat d'apprentissage</p>
                                </div>
                                <div className="card_Four_right"> 
                                    <img  className='iconCard_RIGHT_two' src={signer} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className="backgroundPart">
                            <div className="bonhommeContain">
                                <img  className='man' src={manPicture} alt='' />
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div className="trrigersec2"></div>  
        </div>
    )


}


export default Section_2