import React from 'react';
// import { FaMagnifyingGlass } from "@vertisanpro/react-icons/fa6";
import { smoothScroll } from '../../utils/scroll';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          El Arte de Medir para Mejorar Rendimiento
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100">
          Medición de performance para aumentar el autoconocimiento y productividad 
          de tu equipo, al alcance de la PyME y consultores independientes.
        </p>
        
        <button 
          onClick={() => smoothScroll('tests-section')}
          className="flex items-center justify-center mx-auto bg-white text-blue-900 
                     px-8 py-3 rounded-full hover:bg-blue-50 transition-colors 
                     duration-300 font-semibold"
        >
          {/* <FaMagnifyingGlass className="w-5 h-5 mr-2" /> */}
          NUESTROS TEST CORPORATIVOS
        </button>
      </div>
    </header>
  );
};

export default Header; 