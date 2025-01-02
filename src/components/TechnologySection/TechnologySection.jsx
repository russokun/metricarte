import React from 'react';

const TechnologySection = () => {
  return (
    <section className="bg-blue-800 py-16 px-4 relative overflow-hidden">
      {/* Formas curvas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-white/5 transform -skew-y-6"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-white/5 transform skew-y-6"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          TECNOLOGÍA AL ALCANCE DE TU MANO
        </h2>
        
        <p className="text-lg text-blue-100 mb-8">
          Descubre cómo <strong>Metricarte</strong> revoluciona la forma de medir y 
          mejorar la <strong>productividad</strong> de tu equipo a través de 
          <strong>diagnósticos automatizados</strong> y análisis precisos.
        </p>
        
        <button 
          onClick={() => smoothScroll('products-section')}
          className="bg-white text-blue-900 px-8 py-3 rounded-full 
                     hover:bg-blue-50 transition-colors duration-300 font-semibold"
        >
          CONOCE NUESTROS PRODUCTOS
        </button>
      </div>
    </section>
  );
};

export default TechnologySection; 