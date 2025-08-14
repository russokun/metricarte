import { Button } from '@/components/ui/Button';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HERO_BG =
  "https://images.unsplash.com/photo-1613186187355-04873a327675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzQ4Mjd8MHwxfHNlYXJjaHwyMHx8ZmluYW5jaWFsJTIwZ3Jvd3RofGVufDB8MHx8fDE3NTQzOTIyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080";

const Hero = () => {
  const { toast } = useToast();
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcula opacidad en base al scroll (0 = visible, 300px = invisible)
  const bgOpacity = Math.max(0, 1 - scrollY / 300);

  const handleCTAClick = () => {
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: "El registro estará disponible pronto. 🚀",
    });
  };

  return (
    <section
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Imagen de fondo animada */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: bgOpacity }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
        }}
      />
      {/* Overlay azulado para la imagen de fondo */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: bgOpacity }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "linear-gradient(120deg, rgba(30,60,148,0.5) 0%, rgba(30,60,148,0.3) 100%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Genera{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                reportes profesionales
              </span>{' '}
              para tus procesos de coaching y facilitación
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Agrega valor a tu proceso personal o grupal incorporando la tecnología de metricarte y diferénciate en el mercado.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="btn-primary text-lg px-8 py-3 rounded-xl font-semibold group"
              >
                Comenzar Gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={handleCTAClick}
                variant="outline" 
                size="lg" 
                className="border-white/30 hover:bg-white/10 text-lg px-8 py-3 rounded-xl font-semibold text-black"
              >
                Ver Demo
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;