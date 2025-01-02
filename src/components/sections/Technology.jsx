import Container from '../ui/Container';
import Button from '../ui/Button';
import { smoothScroll } from '../../utils/scroll';

const Technology = () => {
  return (
    <section className="bg-blue-800 py-20 relative overflow-hidden">
      {/* Formas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-white/5 transform -skew-y-6" />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-white/5 transform skew-y-6" />
      </div>

      <Container className="text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          TECNOLOGÍA AL ALCANCE DE TU MANO
        </h2>
        
        <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto">
          Descubre cómo <strong>Metricarte</strong> revoluciona la forma de medir y 
          mejorar la <strong>productividad</strong> de tu equipo a través de 
          <strong> diagnósticos automatizados</strong> y análisis precisos.
        </p>

        <Button onClick={() => smoothScroll('products')}>
          CONOCE NUESTROS PRODUCTOS
        </Button>
      </Container>
    </section>
  );
};

export default Technology; 