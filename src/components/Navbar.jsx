import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BarChart3, Settings, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleNavClick = (section) => {
    toast({
      title: "🚧 Navegación en desarrollo",
      description: "Esta sección estará disponible pronto. ¡Solicítala en tu próximo prompt! 🚀",
    });
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 navbar-glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Metricarte
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('dashboard')}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Dashboard
            </button>
            <button 
              onClick={() => handleNavClick('analytics')}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Análisis
            </button>
            <button 
              onClick={() => handleNavClick('forms')}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Formularios
            </button>
            <button 
              onClick={() => handleNavClick('reports')}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
            >
              Reportes
            </button>
            
            <Button 
              onClick={() => handleNavClick('login')}
              variant="outline" 
              className="border-white/30 text-black hover:bg-white/10"
            >
              Iniciar Sesión
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20 mt-2 pt-4 pb-4"
          >
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => handleNavClick('dashboard')}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-left py-2"
              >
                Dashboard
              </button>
              <button 
                onClick={() => handleNavClick('analytics')}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-left py-2"
              >
                Análisis
              </button>
              <button 
                onClick={() => handleNavClick('forms')}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-left py-2"
              >
                Formularios
              </button>
              <button 
                onClick={() => handleNavClick('reports')}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-left py-2"
              >
                Reportes
              </button>
              <Button 
                onClick={() => handleNavClick('login')}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 mt-4"
              >
                Iniciar Sesión
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;