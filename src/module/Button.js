import React from "react";
import "./Button.css";

function Button({ href, onClick, className, text }) {
    return (
        <a href={href}>
            <button
                onClick={onClick}
                className={className}
            >
                {text}
            </button>
        </a>
    );
}

export default Button;