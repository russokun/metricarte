import { Button } from '@/components/ui/Button';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HERO_BG =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"; // Puedes cambiar la URL por la imagen que prefieras

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
      {/* Overlay para oscurecer la imagen y mejorar contraste */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">Análisis en Tiempo Real</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">Automatización n8n</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">Seguridad Empresarial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div 
                className="glass-effect rounded-3xl p-8 floating-animation"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img  
                  alt="Dashboard de métricas moderno"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                 src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center pulse-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;