import React from 'react';
import './Sobremi.css'
import rostro from '../img/rostro.jpg'

const Sobremi = () => {
    return(
        <div>
             <section  id="sobremi" className="sobremi">

<div className="sobremi-texto">

  <div className="sobremi-caja">
    <h1>sobre mi</h1>
  </div>

 <div className="sobremi-subtitulo">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>

   <div className="sobremi-parrafo">
    <p>
      consectetur adipisicing elit. Molestiae nesciunt eveniet libero nihil, odit saepe ratione, illo incidunt beatae, impedit nobis animi doloribus. Ea explicabo voluptatibus quia itaque? Nemo, animi?
    </p>
    
   </div>
    
  
  </div>
 

  <div>
    <button className="sobremi-btn">Descargar CV</button>
    
  </div>

</div>

<div className="sobremi-cara">
  <img src={rostro} alt="" class="img"/>

</div>

</section>
        </div>
    )
}

export { Sobremi }