import Container from '../ui/Container';
import Button from '../ui/Button';
import { smoothScroll } from '../../utils/scroll';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
      <Container className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          El Arte de Medir para Mejorar Rendimiento
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100 animate-fade-in-up">
          Medición de performance para aumentar el autoconocimiento y productividad 
          de tu equipo, al alcance de la PyME y consultores independientes.
        </p>
        
        <Button 
          onClick={() => smoothScroll('products')}
          className="inline-flex items-center animate-bounce-subtle"
        >
          <span className="mr-2">🔍</span>
          NUESTROS TEST CORPORATIVOS
        </Button>
      </Container>
    </section>
  );
};

export default Hero; 