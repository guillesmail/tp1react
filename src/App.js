
import './App.css';
import { Galeria } from './components/Galeria/Galeria';
import { Trabajos } from './components/Trabajos/Trabajos';
import { Footer } from './components/Footer/Footer';
import { Servicios } from './components/Servicios/Servicios';
import { Sobremi } from './components/Sobremi/Sobremi';
import { Header } from './components/Header/Header';



function App() {
  
  return (
    <div>

      <div className='fondosupoerior'>
      <Header/>
      </div>

      <div className='fondoinferior'>
        <div className='contenedor'>
        <Sobremi/>
        <Servicios/>
        <Trabajos/>
        <Galeria/>
        <Footer/>
        </div>
        
      </div>
    
    </div>
  );
}

export default App;
