import React from 'react'
import "./Landing.css";

function Landing() {
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
                
                </div>
                <div className="card_two">
    
                </div>
                <div className="card_three">
    
                </div>
            </div>
        </div>
    </div>


  )
}

export default Landing