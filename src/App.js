import React from 'react';
import './App.css';
import Navigationbar from './NavigationBar/Navigationbar';
import SectionHero from './Sectionhero/SectionHero';
import Aboutussection from './Aboutussection/Aboutussection.jsx';
import Servicessection from './Servicessection/Servicessection.jsx';
import Trabajosbox from './Trabajos/Trabajosbox.jsx';
import Contacto from './Contacto/Contacto.jsx';
import Footersct from './Footersct/Footersct.jsx';


const App = () => (

    <div>
      <Navigationbar />
      <SectionHero />
      <Aboutussection />
      <Servicessection />
      <Trabajosbox />
      <Contacto />
      <Footersct />
      
    </div>


);
export default App;
