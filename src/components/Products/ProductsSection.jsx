import React from 'react';
import ProductCard from './ProductCard';

// import { GiCrosshairArrow } from "@vertisanpro/react-icons/gi";
// import { FaUsers } from "@vertisanpro/react-icons/fa6";

const products = [
    {
    title: "Test DISCOVER",
    // icon: GiCrosshairArrow,
    description: "Evaluación psicométrica que identifica cuatro perfiles clave (Catalizador, Conector, Constructor y Visionario). Mejora relaciones y facilita el trabajo en equipo.",
    price: "$299 USD"
    },
    {
    title: "Disfunciones de Equipo",
    // icon: FaUsers,
    description: "Diagnóstico basado en Patrick Lencioni, que identifica las cinco principales problemáticas de equipo.",
    price: "$349 USD"
    },
    {
    title: "Vitalidad Corporativa",
    // icon: FaChartBar,
    description: "Diagnóstico para evaluar compromiso y dinámicas internas. Inspirado en los enfoques de Gallup.",
    price: "$399 USD"
    }
];

const ProductsSection = () => {
  return (
    <section id="tests-section" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl text-center font-bold mb-12 text-gray-900">
          Nuestros Productos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 