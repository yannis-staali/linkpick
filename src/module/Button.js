import React from "react";
import "./Button.css";

function Button({ onClick, className, background, text }) {
    return (
        <div className="button_container">
                <button
                    onClick={onClick}
                    className={`${className} ${background}`}
                >
                    {text}
                </button>
        </div>
    );
}

export default Button;