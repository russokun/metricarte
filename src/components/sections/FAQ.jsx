import { useState } from 'react';
import Container from '../ui/Container';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 flex justify-between items-center text-left hover:text-blue-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <span>{isOpen ? '▼' : '▶'}</span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="pb-4 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
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

  return (
    <section className="bg-gray-900 py-20">
      <Container>
        <h2 className="text-3xl text-center font-bold mb-12 text-white">
          PREGUNTAS FRECUENTES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 text-white max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ; 