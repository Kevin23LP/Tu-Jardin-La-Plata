import React from "react";
import './contactstyles.css';
import imglogopresa from './Gardenlogo.jpg';

const Contacto = () => {
    return (
        <div id="contacto" className="login-container">
            <div className="login-form-section">
                <img src={imglogopresa} alt="Team Logo" className="logo" />
                <h2>Tú Jardin La Plata</h2>
                <p>Pongase en contacto con nosotros, le responderemos a la brevedad.</p>
                <form>
                    <input type="text" placeholder="Nombre y Apellido" className="input-field" />
                    <input type="text" placeholder="Ingrese su e-mail" className="input-field" />
                    <input type="number" placeholder="Su n° de telefono" className="input-field" />
                    <textarea className="mensajetxt" name="mensaje" placeholder="Su Mensaje" ></textarea>
                    <button type="submit" className="login-btn">Enviar Consulta</button>
                    
                </form>
            </div>
            <div className="login-info-section">
                <h2>Somos mas que solo una empresa</h2>
                <p style={{color:"black"}}>
                En Tú Jardín, nos especializamos en crear ambientes únicos y acogedores a través de nuestros servicios de jardinería, paisajismo y pintura. Ya sea que estés buscando renovar tu jardín, darle un nuevo aspecto a tu hogar, o mejorar el diseño exterior, estamos aquí para ayudarte. 
                <br/><br/>
                Nuestro equipo trabaja con atención al detalle, utilizando las mejores técnicas y materiales para garantizar resultados duraderos y estéticamente agradables. Contáctanos y dale vida a tus espacios con un toque profesional y creativo.

                </p>
            </div>
        </div>
    );
};

export default Contacto;