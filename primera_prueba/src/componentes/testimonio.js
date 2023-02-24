import React from "react";
import '../stylesheet/testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor_testimonio'>
      <img
        className="images-testimonio"
        src={require(`../imagenes/Foto${props.imagen}.png`)}
        alt="La foto no ha podido cargarse, intenta reiniciar tu navegador" />
    <div className="contenedor_texto_testimonio">
        <p className="nombre_testimonio"><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className="parentezco_testimonio"><strong>{props.parentezco}</strong> de <b>{props.edad}</b> años</p>
        <p className="texto_testimonio">"{props.testimonio}"</p>
        </div>
      </div>
  );
}
export default Testimonio;