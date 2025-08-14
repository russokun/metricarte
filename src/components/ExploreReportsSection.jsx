import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const ExploreReportsSection = () => (
  <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#DAE8FC] flex flex-col items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Visual (reutilizado del Hero) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center items-center w-full overflow-hidden"
      >
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <motion.div 
            className="glass-effect rounded-3xl p-4 sm:p-8 floating-animation w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img  
              alt="Persona mostrando reporte de vida"
              className="w-80 h-auto rounded-2xl shadow-2xl"
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/wb4hxv7l76YbcOaLtxNf/media/689bbe0fd47b904f717382b7.png" />
          </motion.div>
          {/* Floating elements */}
          <motion.div 
            className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center pulse-glow"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div 
            className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </motion.div>
      {/* Texto y CTA */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center md:text-left md:items-start"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Si eres coach, psicólogo/a, facilitador/a o educador/a <br />explora nuestros reportes
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-md">
          Agrega valor a tus procesos y diferénciate en el mercado utilizando nuestros tests.
        </p>
        <Button className="btn-primary px-8 py-4 text-lg font-semibold shadow-lg">
          Comienza hoy
        </Button>
      </motion.div>
    </motion.div>
  </section>
);

export default ExploreReportsSection;
