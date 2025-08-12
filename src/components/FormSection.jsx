import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import EmbeddedForm from '@/components/EmbeddedForm';

const FormSection = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const { toast } = useToast();

  const tabs = [
    {
      id: 'contact',
      label: 'Contacto',
      description: 'Conecta con nuestro equipo'
    },
    {
      id: 'demo',
      label: 'Solicitar Demo',
      description: 'Agenda una demostración'
    },
    {
      id: 'support',
      label: 'Soporte',
      description: 'Obtén ayuda técnica'
    }
  ];

  return (
    <section id="form-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Conecta con{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Metricarte
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Formularios inteligentes conectados a n8n para automatizar tu flujo de trabajo
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center mb-8 glass-effect rounded-2xl p-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{tab.label}</div>
                  <div className="text-xs opacity-80">{tab.description}</div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="form-container rounded-3xl p-8 md:p-12"
          >
            <EmbeddedForm formType={activeTab} />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Respuesta Rápida</h3>
              <p className="text-white/70 text-sm">Respuesta garantizada en menos de 24 horas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Automatización n8n</h3>
              <p className="text-white/70 text-sm">Workflows automatizados para mejor eficiencia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Soporte Experto</h3>
              <p className="text-white/70 text-sm">Equipo especializado en métricas empresariales</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;