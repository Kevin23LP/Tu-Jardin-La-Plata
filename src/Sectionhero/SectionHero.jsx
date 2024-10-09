import React from "react";
import stylesherosection from './Sectionherostyles.css';
import imgsergiogarden from './409742683_652893566919334_8433900218171501647_n.webp';



const SectionHero = () => {
    
    return <div className="herosection">
        
        <div className="half txtherodiv">
            <div>
                <h2 className="opset">¿Tu jardin grita AUXILIO?</h2>
            </div>
            <div className="tth1">
                <h1>Damos el toque de vida que tu jardin necesita</h1>
            </div>
            <div>
                <p>Ofrecemos Servicio profesional de Jardineria y Paisajismo.</p>
            </div>
            <div className="herobutons">
                <div>
                    <a className="herobtn1" href="#trabajos">Ver Diseños</a>
                </div>
                <div>
                    <a className="herobtn2" href="https://api.whatsapp.com/send/?phone=542215905503&text=Hola%21+Quiero+saber+mas%21.&type=phone_number&app_absent=0" target="__blank">Contactar</a>
                </div>
            </div>
        </div>

        <div className="half imgdivhero">
            <img src={imgsergiogarden} alt="imagen" />
        </div>

    </div>


};





export default SectionHero