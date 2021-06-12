import React from 'react';
import "./style.css";

function CounterDisplay(props) {
    return (
        <div className="display">
            <p>{props.text}</p>
        </div>
    );
}

export default CounterDisplay;