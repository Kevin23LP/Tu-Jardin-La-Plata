import React from "react";
import servicessectionstyles from './servicessectionstyles.css';
import Card from "./servicecard";
import imgplantas from './DALL·E 2024-10-01 16.10.01 - A set of beautiful plant pots displayed on a table, with a clean white background. The pots contain various attractive plants, including leafy greens .webp';
import poda from './estesiespoda.jpg'
import pintura from './DALL·E 2024-10-03 16.37.26 - A room that conveys the idea of general painting work in progress, with a paint roller and brush on a step ladder, paint cans on the floor, and a wall.webp'

const Servicessection = () => (

    <div className="servicesection" id="servicios"> 
        <div>
            <div className="txtservice">
                <h1>Nuestros Servicios</h1>
                <p>En Tu Jardín, nos especializamos en brindar soluciones integrales para embellecer y mantener sus espacios tanto interiores como exteriores. Con un equipo de profesionales altamente capacitados y una pasión por la naturaleza y el diseño, ofrecemos los siguientes servicios:</p>
            </div>
            <div className="servicescards">
                <div>
                    <Card imagensrc={imgplantas} servicio={'Jardineria'} detalles={'Servicio de jardineria y paisajismmo en general, limpieza de jardines, diseños, podas de arbustos, etc. creamos paisajes que armonicen con el entorno, utilizando las plantas y elementos decorativos más adecuados para cada espacio.'} backgroundColor={"lightgray"} />
                </div>
                <div>
                    <Card imagensrc={poda} servicio={'Podas en altura'} detalles={'Contamos con personal especializado y equipo adecuado para realizar podas en altura, garantizando la seguridad y salud de sus árboles. Mantenemos su vegetación en óptimas condiciones, mejorando su aspecto y previniendo posibles riesgos.'} backgroundColor={"lightseagreen"} />
                </div>
                <div>
                    <Card imagensrc={pintura} servicio={'Pintura en general'} detalles={'Renovamos tanto interiores como exteriores con trabajos de pintura de alta calidad. Nos encargamos de revitalizar fachadas, muros y otros elementos, asegurando acabados duraderos que reflejen la personalidad y estilo de cada lugar.'} backgroundColor={"lightsteelblue"}/>
                </div>
            </div>
        </div>
    </div>

);


export default Servicessection