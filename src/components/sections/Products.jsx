import Container from '../ui/Container';
import Button from '../ui/Button';

const ProductCard = ({ title, icon, description, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <div className="text-center mb-6">
        <span className="text-4xl text-blue-600">{icon}</span>
        <h3 className="text-xl font-bold mt-4 text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 flex-grow mb-6 text-center">
        {description}
      </p>
      
      <div className="text-center mt-auto">
        <p className="text-2xl font-bold text-gray-900 mb-4">{price}</p>
        <Button variant="secondary" className="w-full">
          QUIERO ESTA HERRAMIENTA
        </Button>
      </div>
    </div>
  );
};

const products = [
  {
    title: "Test DISCOVER",
    icon: "🎯",
    description: "Evaluación psicométrica que identifica cuatro perfiles clave (Catalizador, Conector, Constructor y Visionario). Mejora relaciones y facilita el trabajo en equipo.",
    price: "$299 USD"
  },
  {
    title: "Disfunciones de Equipo",
    icon: "👥",
    description: "Diagnóstico basado en Patrick Lencioni, que identifica las cinco principales problemáticas de equipo.",
    price: "$349 USD"
  },
  {
    title: "Vitalidad Corporativa",
    icon: "📊",
    description: "Diagnóstico para evaluar compromiso y dinámicas internas. Inspirado en los enfoques de Gallup.",
    price: "$399 USD"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl text-center font-bold mb-12 text-gray-900">
          Nuestros Productos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products; 