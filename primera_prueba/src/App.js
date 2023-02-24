import './App.css';
import Testimonio from './componentes/testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor_principal'>
        <h1>Esto es lo que dicen algunos familiares sobre Javi:</h1>
        <Testimonio 
        nombre='Emma Dualde'
        pais='Suecia'
        imagen='Emma'
        parentezco='Hermana mayor'
        edad='29'
        testimonio='Siempre intento dar lo mejor de sí para aprender y sacar buenas notas en el colegio. Lo mismo ha hecho en cada curso que ha tomado, siempre con una sonrisa dando su mejor desempeño. No importaba cuan difícil sea un problema, él siempre encontró una solución' />
        <Testimonio 
        nombre='Nico Dualde'
        pais='Argentina'
        imagen='Nico'
        parentezco='Hermano mayor'
        edad='34'
        testimonio='Un adicional tremendo para cualquier equipo de trabajo, dispuesto a capacitarse continuamente y perseverante en la busqueda de nuevas modalidades de trabajo y solucion a diversos problemas. Se propone desafios y no para hasta cumplirlos. Un pitbull de la programacion, asi que deberias contratarlo.' />
        <Testimonio 
        nombre='Josefina Gomboi'
        pais='Colombia'
        imagen='Jose'
        parentezco='Tía Materna'
        edad='44'
        testimonio='Adoro a este niño. Siempre fue tan atento y alegre. En cuanto al trabajo creo que no hay nada que no pueda lograr si se lo propone, es un chico super listo y capaz. Serían afortunados de tener a alguien como Javi trabajando en su empresa. Saludos. ' />
        <Testimonio 
        nombre='Leo Dualde'
        pais='Argentina'
        imagen='Leo'
        parentezco='Tercer hermano'
        edad='28'
        testimonio='Veo que Javi está buscando abrirse camino en el mundo laboral de las tecnologías, en cuanto comenzó a estudiar programación vino a mí y me pidió consejos, le expliqué lo básico del lenguaje de javaScript y a los pocos días me sorprendió con todo lo que había aprendido. Se toma el estudio muy en serio y además lo disfruta, le agrada saber más, se siente en disconformidad frente a la ignorancia y no poder resolver algo, sé que le ira muy bien en esta carrera.' />
        <Testimonio 
        nombre='Claudio Dualde'
        pais='Argentina'
        imagen='Claudio'
        parentezco='Padre'
        edad='55'
        testimonio='Javi es un gran chico. Si tuviese que elegir a alguien para confiarle una tarea importante, alguien que sé que se hará responsable y hará lo mejor que pueda para lograrlo es él. Y esto no es porque sea mi hijo ¡NO! además de que tengo 5 hijos. Me ha demostrado que puede tomarse las cosas seriamente y conseguir lo que se proponga. Sin dudarlo, será una gran adquisición para su empresa.' />
      </div>
    </div>
  );
}
 
export default App;
