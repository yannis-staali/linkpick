import React from 'react';
import './Card.css'
import Button from './Button';
import Rythme1 from '../images/rythme1.svg'
import Rythme2 from '../images/rythme2.svg'
import Rythme3 from '../images/rythme3.svg'
// btnHref, onClick, btnClassName, btnText

function Card({ className, img , title , text, alt, btnHref, onClick, btnClassName, btnBackground, btnText } ) {
    return (
        <div className={className}>
            <div className='card_image'>
                {(() => {
                    if (img === "1") {
                        return <img src={Rythme1} alt={alt} />;
                    }
                    if (img === "2") {
                        return <img src={Rythme2} alt={alt} />;
                    }
                    if (img === "3") {
                        return <img src={Rythme3} alt={alt} />;
                    }
                    else {
                        return <img src={`${img}`} alt={alt} />;
                    }
                }) ()}
            </div>
            <div className='card_title'>
                <h3>{title}</h3>
            </div>
            <div className='card_text'>
                <p>{text}</p>
            </div>
            <Button href={btnHref} onClick={onClick} className={`${btnClassName} ${btnBackground}`} text={btnText} />
        </div>
    )
}
export default Card