import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <Container className="text-center text-sm">
        <p className="mb-4">
          © {new Date().getFullYear()} Metricarte. Todos los derechos reservados.
        </p>
        <p>
          Los pagos son procesados de manera segura por Hotmart. Al realizar la 
          compra, aceptas nuestros términos y condiciones.
        </p>
      </Container>
    </footer>
  );
};

export default Footer; 