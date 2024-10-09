import React from "react";
import './footerstyles.css';
import inst from './instagram-logo-24.png'
import fb from './facebook-logo-24.png'


const Footersct = () => (

    <div className="footerdiv" id="nose">
        <div className="socialf">
            <div>
                <h1>Tu Jardin</h1>
            </div>
            <div>
                <p>
                    ¿Siempre ofreciendo la mejor calidad de trabajo en nuestro servicio! <br />Cualquier consulta, no dudes en ponerte en contacto con nososotros en nuestras redes sociales.
                </p>
            </div>
            <div className="medialinks">
                <a href="https://www.facebook.com/profile.php?id=100091360369212" target="__blank"><img src={fb} alt="" /></a>
                <a href="https://www.instagram.com/paisajismo_lp/" target="__blank"><img src={inst} alt="" /></a>
            </div>
        </div>
        <div className="empresadat">
            <div>
            <p>&copy; {new Date().getFullYear()} Tu Jardin. Todos los derechos reservados.</p>
            </div>
            
        </div>
    </div>

);

export default Footersct