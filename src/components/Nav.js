import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "./Nav.css";
import logoLinckpick from '../images/Logo_linkpick.png';


function Nav() {

    const [showLinks, setShowLinks] = useState(false);
    const [nav, setNav] = useState(false);


    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }


    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true);
        }
        else{
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    // let link = document.getElementById('linkDrop');

    // link.addEventListener("mouseover" );

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} ${nav ? "activateNav" : "immobile"}`}>
        <div className="navbar__logo">
            <Link className="navbar__link containLogo" to="/"><img  className='img__logo' src={logoLinckpick} alt='' /></Link>
        </div>
        <ul className="navbar__links">
            <li className="navbar__item slideInDown-1">
                <nav>
                    <Link className="navbar__link" to="/solution-entreprise">Trouver mon entreprise</Link>
                </nav>
            </li>
            <li className="navbar__item slideInDown-2">
                <nav>
                    <Link className="navbar__link" to="/solution-ecole">Trouver mon école</Link>
                </nav>
            </li>
            <li className="navbar__item slideInDown-3 containDrop">
                <div className="containlinkAndDrop">
                    <a href="/" className="navbar__link linky " id='linkDrop'>Espace organisme</a>
                    {/* <div className='navbar__link_dropdown'>
                        <p>Etablissement scolaire</p>
                        <p>Etablissement scolaire</p>
                        <p>Etablissement scolaire</p>
                    </div> */}
                </div>
            </li>
    
            <li className="navbar__item slideInDown-5">
                <a href="/" className="navbar__link">Se connecter</a>
            </li>
            <li className="navbar__item slideInDown-6 ">
                <a href="/" className="navbar__link buttonInscrire">S'inscrire</a>
            </li>
        </ul>
        <button  className='navbar__burger' onClick={handleShowLinks}>
            <span className="burger-bar"></span>
        </button>
    </nav>
  )
}

export default Nav