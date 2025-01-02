import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: "¿El recurso es presencial?",
    answer: "No, te entregamos acceso a todo en videos y una plataforma online."
  },
  {
    question: "¿Cuánto tiempo puedo acceder al recurso?",
    answer: "El acceso es de por vida."
  },
  {
    question: "¿Qué forma de pago aceptan?",
    answer: "Todas las formas de pago en línea disponibles."
  }
];

const FAQSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl text-center font-bold mb-12 text-white">
          PREGUNTAS FRECUENTES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 