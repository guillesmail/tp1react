import React from 'react';
import './Header.css';
import './Menu.js'




const Header = () => {
  

    return(
        <div header className="hero">
            
                <div className="menusuperior">
                    <div className="logo">
                        <p className="guille">Guille</p><span>\</span><p className="ojeda">Ojeda</p>
                    </div>

                    <nav id="estado-menu" className="desabilitado-hamb">
                        <ul>
                            <li  className="nav-lista"><a href="#sobremi">SOBRE MI</a></li>
                            <li  className="nav-lista"><a href="#trabajos">TRABAJOS</a></li>
                            <li className="nav-lista"><a href="#contacto">CONTACTO</a></li>
                        </ul>
            
                    </nav>
           
                    <div className="menu">
                        <button className="hamburguesa" id="btn-hamburguesa">
                            <hr></hr>
                            <hr></hr>
                            <hr></hr>
                        </button>

                    </div> 
                </div>
        
                <section className="hero-texto">
                    <div className="hero-titulo">
                        <h1>¡hola! soy Guille</h1>
                    </div>
          
                    <p>Bienvenido a mi sitio web.</p>
                    <p>Soy un programador aún en pañales.</p>
  
                </section>
           
    
    
      

        </div>
    )
}

export { Header }