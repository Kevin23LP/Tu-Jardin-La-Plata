import React from "react";
import servicesstyles from './servicessectionstyles.css';


const Card = ({imagensrc, servicio, detalles, backgroundColor}) => (

    <div className="cardservice" style={{backgroundColor}} >
        <div>
            <img className="imgofcard" src={imagensrc} alt="nose" />
        </div>
        <div>
            <h3>{servicio}</h3>
        </div>
        <div>
            <p>{detalles}</p>
        </div>
    </div>

);

export default Card