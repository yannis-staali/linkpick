import React, {useState} from 'react';
import "./Nav.css";
import logo from '../images/logo.png';
import logoLinckpick from '../images/Logo_linkpick.png';


function Nav() {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }


    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true);
        }
        else{
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} ${nav ? "activateNav" : "immobile"}`}>
        <div className="navbar__logo"><a href='#' className='logo'><img  className='img__logo' src={logoLinckpick} alt='' /></a></div>
        <ul className="navbar__links">
            <li className="navbar__item slideInDown-1">
                <a href="/" className="navbar__link">Trouver mon entreprise</a>
            </li>
            <li className="navbar__item slideInDown-2">
                <a href="/" className="navbar__link">Trouver mon école</a>
            </li>
            <li className="navbar__item slideInDown-3">
                <a href="/" className="navbar__link">Espace organisme</a>
            </li>
            <li className={`navbar__item slideInDown-4 deca ${showLinks ? "decaClear" : ""}`} >
                <a href="/" className="navbar__link">Contactez-nous</a>
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