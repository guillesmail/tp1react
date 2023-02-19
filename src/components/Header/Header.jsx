import React from 'react';
import './Header.css';




const Header = () => {
  

    return(
        <div header class="hero">
            
                <div class="menusuperior">
                    <div class="logo">
                        <p class="guille">Guille</p><span>\</span><p class="ojeda">Ojeda</p>
                    </div>

                    <nav id="estado-menu" class="desabilitado-hamb">
                        <ul>
                            <li  class="nav-lista"><a href="#sobremi">SOBRE MI</a></li>
                            <li  class="nav-lista"><a href="#trabajos">TRABAJOS</a></li>
                            <li class="nav-lista"><a href="#contacto">CONTACTO</a></li>
                        </ul>
            
                    </nav>
           
                    <div class="menu">
                        <button class="hamburguesa" id="btn-hamburguesa">
                            <hr></hr>
                            <hr></hr>
                            <hr></hr>
                        </button>

                    </div> 
                </div>
        
                <section class="hero-texto">
                    <div class="hero-titulo">
                        <h1>¡hola! soy Guille</h1>
                    </div>
          
                    <p>Bienvenido a mi sitio web.</p>
                    <p>Soy un programador en pañales.</p>
  
                </section>
           
    
    
      

        </div>
    )
}

export { Header }