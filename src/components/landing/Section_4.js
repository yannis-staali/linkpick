import React from 'react';
import Card from '../../module/Card';
import './Section_4.css'

function Section4() {

    return (
        <section>
            <div className='title_container'>
                <h1>Construisez enfin votre carrière <br/> au rythme de votre parcours</h1>
            </div>
            <div className='card_container'>
                <Card 
                    className="card"
                    img="1"
                    alt="img_ecole"
                    title="Je suis une école" 
                    text="Je veux aider nos étudiants, trouver des entreprises partenaires ou en savoir plus."
                    btnHref="/"
                    btnClassName="subscribeButton"
                    btnBackground="orange"
                    btnText="Découvrir la solution"
                />
                <Card
                    className="card"
                    img="2"
                    alt="img_ecole"
                    title="Je suis un(e) étudiant(e)"
                    text="Je veux trouver un stage, une alternance ou une formation."
                    btnHref="/"
                    btnClassName="subscribeButton"
                    btnBackground="blue"
                    btnText="S'inscire"
                />
                <Card
                    className="card"
                    img="3"
                    alt="img_ecole"
                    title="Je suis une entreprise"
                    text="Je veux trouver des étudiants, des écoles partenaires ou en savoir plus."
                    btnHref="/"
                    btnClassName="subscribeButton"
                    btnBackground="green"
                    btnText="Découvrir la solution"
                />
            </div>
        </section> 
        )
}
export default Section4