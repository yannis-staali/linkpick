import React from 'react'; 
import logoLinckpick from '../images/Logo_linkpick.png';
import AppleStore from '../images/apple-store.svg'; 
import PlayStore from '../images/google-play.svg'; 
import './Footer.css'; 
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const Footer = () => {
    return(
        <div>
            <section id="footer">
                <div className="content_footer">
                    <div className="left_footer">
                        <div className="logo_footer">
                            <img src={logoLinckpick} alt="logo_linkpick" />
                        </div>
                        <p>Linkpick simplifie et automatise les processus de paie et de RH
                            pour les petites et moyennes entreprises. Notre mission est de
                            soutenir la transformation numérique de la gestion
                            des ressources humaines grâce à une gamme croissante de
                            caractéristiques et de services.
                        </p>
                        <ul class="list-rs">
                            {/* <li><LinkedInIcon /></li>
                            <li><FacebookIcon /></li>
                            <li><InstagramIcon /></li> */}
                        </ul>
                        <div className="store">
                            <p> Bientot disponible sur :</p>
                            <div>
                                <div class="bloc_img_store">
                                    <img src={AppleStore} alt="apple-store" />
                                </div>
                                <div class="bloc_img_store">
                                    <img src={PlayStore} alt="play-store" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right_footer">
                        <div className="bloc-footer">
                            <h3>Recherche</h3>
                            <p>Trouver une entreprise</p>
                            <p>Trouver un établissement scolaire</p>
                        </div>
                        <div className="bloc-footer">
                            <h3>Espace organisme</h3>
                            <p>Solution entreprise</p>
                            <p>Solution établissement scolaire</p>
                        </div>
                        <div className="bloc-footer">
                            <h3>Contact</h3>
                            <p>Contactez</p>
                        </div>
                        <div className="bloc-footer">
                            <h3>Société</h3>
                            <p>Pourquoi Linkpick</p>
                            <p>Notre histoire</p>
                            <p>Nous embauchons !</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer-extend">
                <div className="copyright">
                    Copyright © 2022 Linkpick, tous droits réservés.
                </div>
                <ul>
                    <li>Conditions générales d'utilisations</li>
                    <li>Cookies</li>
                    <li>Mentions Légales </li>
                    <li> RGPD </li>
                </ul>
            </section>
        </div>
    )
}