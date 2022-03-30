import React from 'react';
import './Newsletter.css'
import '../../module/Button'
import Button from '../../module/Button';
import Sparkles from '../../images/newsletter/Sparkles.svg'
import Congrats from '../../images/newsletter/Congrats.svg'

function Newsletter() {

    return (
        <section>
            <div className='newsletter_container'>
                <div className='title_container'>
                    <div className='emojiContainer'>
                        <h1>Prêt à vous lancer ?</h1>
                        <img src={Congrats} alt=''></img>
                        <img src={Sparkles} alt=''></img>
                    </div>
                    <p>Inscrivez-vous à notre newsletters pour recevoir nos conseils et actualités</p>
                    <input className="emailInput" placeholder="Votre adresse mail"></input>
                    <Button href="/" onClick="" className="subscribeButton lightOrange min-width" text="S'inscrire à la newsletters"/>
                </div>
            </div>
        </section>
    )
}
export default Newsletter