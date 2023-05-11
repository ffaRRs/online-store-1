import React from "react";
import './ButtonAdd.scss'

const ButtonAdd = ({text, nameStyle, whatBtn}) => {
    return (
        <>
        {
            (whatBtn !== 'oneClick') ? <button className={nameStyle ? 'btn-add' + ' ' + nameStyle : 'btn-add'}>{text}</button> 
            : <button className={nameStyle ?  'buy-one-click' + ' ' + nameStyle : 'buy-one-click'}>{text}</button>
        }
        </>
    // <button className={nameStyle ? nameStyle  + ' ' + 'btn-add' : 'btn-add'}>{text}</button>
    );
};

export default ButtonAdd;
