import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import javiLogo from './imagenes/javi-logo.png'

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      numClicks:0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }
  
  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1}));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
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
          numClicks={this.state.numClicks}
          />
          <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={this.manejarClick} /> 
          <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
