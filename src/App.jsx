import Hero from './components/sections/Hero';
import Technology from './components/sections/Technology';
import Products from './components/sections/Products';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Technology />
      <Products />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
