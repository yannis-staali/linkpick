import React from 'react';
import './Card.css'
import Button from './Button';

function Card( img, alt, title, text, btnHref, onClick, btnClassName, btnText ) {
    return (
        <div>       
            <div>
                <img src={img} alt={alt} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{text}</p>
            </div>
            <Button href={btnHref} onClick={onClick} className={btnClassName} text={btnText} />
        </div>
    )
}
export default Card