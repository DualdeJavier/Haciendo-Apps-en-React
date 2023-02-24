import './App.css';
import javilogo from './imagenes/javi-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="app-lista-tareas">
      <div className='javi-logo-contenedor'>
        <img 
        src={javilogo}
        className='javi-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Lista de Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
