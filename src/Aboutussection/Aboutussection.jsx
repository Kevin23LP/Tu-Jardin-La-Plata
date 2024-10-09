import React from "react";
import aboutusstyles from './aboutusstyles.css';
import mifotoperfil from './jjujjuujjuuhuighuyguuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu.png';


const Aboutussection = () => (

    <div className="aboutbox">
        <div className="abotusbox imgnamebox">
            <div>
                <img src={mifotoperfil} alt="foto paisajista" />
            </div>
            
        </div>
        <div className="abotusbox txtbox">
            <div id="nosotros">
                <h1>¿Quienes somos?</h1>
            </div>
            <p>
                Somos una empresa de jovenes que ofrece los servicios de Paisajismo y Jardineria en La Plata y alrededores. <br />Con mas de 15 años de experiencia en este hermoso oficio, siempre brindamos los resultados exigidos por el cliente, desenvolviendonos de manera eficiente en este ambito.
            </p>
            <div>
                <a className="usbtn" href="https://api.whatsapp.com/send/?phone=542215905503&text=Hola%21+Quiero+saber+mas%21.&type=phone_number&app_absent=0" target="__blank">Contactar</a>
            </div>
        </div>
    </div>

);


export default Aboutussection