import React from "react";
import Navbar from './Navbar.css';
import logotitle from './titulologoparapagina.png'

const Navigationbar = () => (

    <div className="navbarpage">
        <div className="logobox">
            <img className="imgtitle" src={logotitle} alt="logo Jardineria" />
        </div>
        <div className="linksbox">
            <li>
                <a href="#nosotros">Sobre Nosotros</a>
            </li>
            <li>
                <a href="#servicios">Servicios</a>
            </li>
            <li>
                <a href="#trabajos">Trabajos realizados</a>
            </li>
            <li>
                <a href="#contacto">Contacto</a>
            </li>

        </div>
    </div>


);

export default Navigationbar