import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-sm text-gray-400">
          <p className="mb-4">
            © {new Date().getFullYear()} Metricarte. Todos los derechos reservados.
          </p>
          <p>
            Los pagos son procesados de manera segura por Hotmart. Al realizar la 
            compra, aceptas nuestros términos y condiciones.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 