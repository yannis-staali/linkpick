import React, {useEffect} from 'react';
import "./Section_1.css";
import boussole from '../../images/boussole.png';
import malette from '../../images/malette.png';
import courbe from '../../images/courbe.png';


// import Button from '../../module/Button';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ScrollToPlugin} from  "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


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
            // delay: delay || 0.4,
            duration: duration || 0.6,
            scrollTrigger: {
                trigger: elem,
                start: "top",
                // end: "bottom center"
            }

        }
    )
}



function Section1() {

    useEffect(() => {

        //Animation cardOne
        gsap.from(".card_one", {
            scrollTrigger: ".card_one",
            y:100,
            x:-100,
            duration:1
        });

        //Animation cardTwo
        gsap.from(".card_two", {
            scrollTrigger: ".card_two",
            y:100,
            duration:1
        });

        //Animation cardThree
        gsap.from(".card_three", {
            scrollTrigger: ".card_three",
            y:100,
            x:100,
            duration:1
        });

    }, [])

  return (
    <div className='landing_main'>      
        <div className='landing_main'>
            <div className="landing__container">
                <div className="middlebox">
                    <h1 className='landingTitle'> <span className='emploi'> L'emploi,</span> <br/> au bout des doigts</h1>
                    <p className='landingIntro'>Linkpick est la première solution qui aide et met en relation <br/> <span className="emploi">les étudiants</span>, <span className="emploi">les entreprises</span> et<span className="emploi"> les écoles</span>, avant, pendant et après la formation.</p>
                    <div className="form_landing">
                        <div className="form_landing_top">
                            <div className="form_top_one">
                                <div className="form_top_one_label">
                                    <p className='form_top_one_label_text'><span class="material-icons ii">search</span>Vous recherchez</p>
                                </div>
                                <div className="form_top_one_input">
                                    <p className='form_top_one_input_text'>Une entreprise</p>
                                </div>
                            </div>
                            <div className="form_top_two">
                                <div className="form_top_two_label">
                                    <p className='form_top_two_label_text'><span class="material-icons ii">description</span>Type de contrat</p>
                                </div>
                                <div className="form_top_two_input">
                                    <p className='form_top_two_input_text'>Alternance</p>
                                </div>
                            </div>
                            <div className="form_top_three">
                                <div className="form_top_three_label">
                                    <p className='form_top_three_label_text'><span class="material-icons ii">place</span>Où ?</p>
                                </div>
                                <div className="form_top_three_input">
                                    <p className='form_top_three_input_text'>Ville ou code postal</p>
                                </div>
                            </div>
                        </div>
                        <div className="form_landing_bottom">
                            <a href="/" className="searchButton">Rechercher</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="landing_threeCards">
            <div className="landing_threeCards_container">
                <div className="card_one">
                    <div className="card_one_image">
                        <img  className='boussole' src={boussole} alt='' />
                    </div>
                    <div className="card_one_title">
                        <p>Choississez votre voie</p>
                    </div>
                    <div className="card_one_text">
                        <p>Explorez les trajectoires de formation 
                        et candidatez en quelques clics dans les écoles 
                        qui vous correspondent.</p>
                    </div>
                </div>
                <div className="card_two">
                    <div className="card_one_image">
                        <img  className='boussole' src={malette} alt='' />
                    </div>
                    <div className="card_one_title">
                        <p>Trouvez votre emploi</p>
                    </div>
                    <div className="card_one_text">
                        <p>Validez vos diplômes avec nos 
                            entreprises partenaires qui proposent des 
                            stages ou des alternances toute l'année.
                        </p>
                    </div>
                </div>
                <div className="card_three">
                    <div className="card_one_image">
                        <img  className='boussole' src={courbe} alt='' />
                    </div>
                    <div className="card_one_title">
                        <p>Soyez accompagné</p>
                    </div>
                    <div className="card_one_text">
                        <p>Linkpick est ses partenaires s'engagent 
                            à vous accompagner et à vous épauler
                            tout au long de votre parcours d'étudiant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1