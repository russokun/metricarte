import Container from '../ui/Container';

const TestimonialCard = ({ name, text, rating = 5 }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl">
      <div className="flex flex-col items-center mb-4">
        <div className="w-20 h-20 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-2xl">
          {name.charAt(0)}
        </div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="flex space-x-1 mt-2">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-300 italic">"{text}"</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <Container>
        <h2 className="text-3xl text-center font-bold mb-12">
          ¿QUÉ DICEN DE NOSOTROS?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Enrique Bercovich"
            text="Realmente ustedes cumplen la promesa de ser tecnología al alcance de la PyME y consultores independientes. ¡Es buenísimo poder aplicarlo a los equipos!"
          />
          {/* Puedes agregar más testimonios aquí */}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials; 