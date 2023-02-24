import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import javiLogo from './imagenes/javi-logo.png'
import { useState } from 'react';


function App() {


  const [numClicks, setNumClicks] = useState(0);

  const hacerClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='javi_logo_contenedor'>
        <img
          className='javi_logo'
          src={javiLogo}
          alt='Aqui hay un logo' />
      </div>
      <div className='contenedor_principal'>
        <Contador 
        numClicks={numClicks}
        />
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={hacerClick} /> 
        <Boton 
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
