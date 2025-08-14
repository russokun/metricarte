import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleLinkClick = (section) => {
    toast({
      title: "🚧 Sección en desarrollo",
      description: "Esta página estará disponible pronto. 🚀",
    });
  };

  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Metricarte
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Medición de performance para aumentar el autoconocimiento y productividad de tu equipo, al alcance de la PyME y consultores independientes.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleLinkClick('twitter')}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={() => handleLinkClick('linkedin')}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={() => handleLinkClick('github')}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="font-semibold text-white text-lg">Producto</span>
            <div className="space-y-3">
              {['Dashboard', 'Análisis', 'Automatización', 'Reportes', 'Integraciones'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleLinkClick(item.toLowerCase())}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>


          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="font-semibold text-white text-lg">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@metricarte.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+56 9 2082 6972</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Santiago de Chile</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-white/60 text-sm">
            © 2025 Metricarte. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <button 
              onClick={() => handleLinkClick('privacy')}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Privacidad
            </button>
            <button 
              onClick={() => handleLinkClick('terms')}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Términos
            </button>
            <button 
              onClick={() => handleLinkClick('cookies')}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Cookies
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;