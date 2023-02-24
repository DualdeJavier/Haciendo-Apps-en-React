import React from "react";
import '../stylesheet/BotonLimpiar.css';

const BotonLimpiar = (props) => (
    <div className='boton-limpiar' 
        onClick={props.manejarLimpiar}>
        {props.children }
    </div>
);

export default BotonLimpiar;