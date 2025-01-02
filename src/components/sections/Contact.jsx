import Container from '../ui/Container';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section className="bg-white py-20">
      <Container className="text-center">
        <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          Si eres de Perú, Chile, Colombia, México o Argentina y quisieras pagar 
          en efectivo, comunícate con un asesor.
        </p>
        
        <Button 
          variant="whatsapp"
          as="a"
          href="https://wa.me/tunumero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <span className="mr-2">💬</span>
          CHATEA CON NOSOTROS
        </Button>
      </Container>
    </section>
  );
};

export default Contact; 