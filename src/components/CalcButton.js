import React from 'react';
import '../App.css'

const CalcButton = (props) => {
    return(
        <button className={`numButton ${props.type}`} onClick={props.onClickHandler} >{props.value}</button>
    );
};

export default CalcButton;