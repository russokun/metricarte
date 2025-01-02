import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-lg mb-8">
          Si eres de Perú, Chile, Colombia, México o Argentina y quisieras pagar 
          en efectivo, comunícate con un asesor.
        </p>
        
        <a 
          href="https://wa.me/tunumero" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-8 py-3 
                     rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          {/* <FaWhatsapp className="w-6 h-6 mr-2" /> */}
          CHATEA CON NOSOTROS
        </a>
      </div>
    </section>
  );
};

export default ContactSection; 