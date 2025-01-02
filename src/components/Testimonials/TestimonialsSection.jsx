import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Enrique Bercovich",
    image: "", // Necesitarás agregar las imágenes
    rating: 5,
    text: "Realmente ustedes cumplen la promesa de ser tecnología al alcance de la PyME y consultores independientes. ¡Es buenísimo poder aplicarlo a los equipos!"
  },
  // Puedes agregar más testimonios aquí
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl text-center font-bold mb-12 text-white">
          ¿QUÉ DICEN DE NOSOTROS?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 