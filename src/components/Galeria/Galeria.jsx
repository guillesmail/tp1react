import React from 'react';
import './Galeria.css';
import galeria1 from '../img/galeria1.jpg';
import galeria2 from '../img/galeria2.jpg';
import galeria3 from '../img/galeria3.jpg';
import galeria4 from '../img/galeria4.jpg';
import galeria5 from '../img/galeria5.jpg';
import galeria6 from '../img/galeria6.jpg';
import galeria7 from '../img/galeria7.jpg';
import galeria8 from '../img/galeria8.jpg';


const Galeria = () => {
    return(
        <div className="galeria">
        
            <img src={galeria1} alt="Galeria" className="img"/>
            <img src={galeria2} alt="Galeria" className="img"/>
            <img src={galeria3} alt="Galeria" className="img"/>
            <img src={galeria4} alt="Galeria" className="img"/>
            <img src={galeria5} alt="Galeria" className="img"/>
            <img src={galeria6} alt="Galeria" className="img"/>
            <img src={galeria7} alt="Galeria" className="img"/>
            <img src={galeria8} alt="Galeria" className="img"/>

        </div>
    )
}

export { Galeria }